/*******************************************************************************
 * Copyright © 2022-2023 VMware, Inc. All Rights Reserved.
 * Copyright (C) 2023 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

package internal

import (
	"fmt"
	"github.com/edgexfoundry/go-mod-bootstrap/v3/bootstrap/handlers"
	"github.com/openziti/sdk-golang/ziti"
	"golang.org/x/net/context"
	"net"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/edgexfoundry/edgex-ui-go/internal/common"
	"github.com/edgexfoundry/edgex-ui-go/internal/config"
)

const (
	HttpProtocol           = "http"
	OriginHostReqHeader    = "X-Origin-Host"
	ForwardedHostReqHeader = "X-Forwarded-Host"

	RootURIPath        = "/"
	localAPIPathPrefix = "/api"
	staticResourcePath = "static/web"
)

var (
	//clientName:clientHost
	clientsMapping map[string]Client
)

type Application struct {
	config *config.ConfigurationStruct
}

type Client struct {
	addr      string
	transport http.RoundTripper
}

func initClientsMapping(config *config.ConfigurationStruct) {
	clientsMapping = make(map[string]Client, 10)
	zitiTransports := make(map[string]http.RoundTripper, 10)
	for clientName, clientInfo := range config.Clients {
		//clientsMapping[fmt.Sprintf("/%s", clientName)] = fmt.Sprintf("%s://%s:%d", clientInfo.Protocol, clientInfo.Host, clientInfo.Port)

		addr := fmt.Sprintf("%s://%s:%d", clientInfo.Protocol, clientInfo.Host, clientInfo.Port)
		client := Client{
			addr:      addr,
			transport: nil,
		}

		switch config.Service.SecurityOptions["ListenMode"] {
		case "zerotrust":
			fmt.Printf("client %s is using zero trust? noice\n", clientName)

			//var zitiRoundTripper http.RoundTripper

			//openZitiServiceName := clientInfo.SecurityOptions["OpenZitiServiceName"]
			if zitiRoundTripper, ok := zitiTransports[clientName]; ok {
				//reuse the existing context
				if zitiRoundTripper == nil {
					panic("how is the transport nil")
				}
				client.transport = zitiRoundTripper
				//client.addr = "http://" + openZitiServiceName
			} else {

				openZitiRootUrl := "https://" + config.Service.SecurityOptions["OpenZitiController"]
				jwt := ""
				caPool, caErr := ziti.GetControllerWellKnownCaPool("https://" + config.Service.SecurityOptions["OpenZitiController"])
				if caErr != nil {
					panic(caErr)
				}
				ctx := handlers.AuthToOpenZiti(openZitiRootUrl, jwt, caPool)

				ziti.DefaultCollection.Add(ctx)

				zitiTransport := http.DefaultTransport.(*http.Transport).Clone() // copy default transport
				zitiTransport.DialContext = func(ctx context.Context, network, addr string) (net.Conn, error) {
					dialer := ziti.NewDialerWithFallback(ctx, nil)
					return dialer.Dial(network, addr)
				}
				zitiTransports[clientName] = zitiTransport
				client.transport = zitiTransport
			}

		case "http":
		default:
			fmt.Printf("client %s is NOT using zero trust? booooo\n", clientName)
		}
		clientsMapping[fmt.Sprintf("/%s", clientName)] = client
	}
}

func hasEdgeXSvcPrefixValidate(path string) bool {
	if strings.HasSuffix(path, common.JsSuffix) {
		return false
	}

	for pathPrefix := range clientsMapping {
		if strings.HasPrefix(path, pathPrefix) {
			return true
		}
	}
	return false
}

func (app *Application) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path
	fmt.Println(path)
	if !strings.HasPrefix(path, localAPIPathPrefix) && !hasEdgeXSvcPrefixValidate(path) {
		w.Header().Add("X-Frame-Options", "SAMEORIGIN")
		w.Header().Add("X-Content-Type-Options", "nosniff")
		w.Header().Add("X-Download-Options", "noopen")
		w.Header().Add("X-XSS-Protection", "1")
		w.Header().Add("Cache-Control", "no-cache,no-store")
		w.Header().Add("Content-Security-Policy", "base-uri 'self';default-src 'self' 'unsafe-inline';img-src 'self' http://www.w3.org/ data:;")
		defaultStaticResourcePath := fmt.Sprintf("%s/en-US", staticResourcePath)
		if path == RootURIPath {
			http.FileServer(http.Dir(defaultStaticResourcePath)).ServeHTTP(w, r)
		} else {
			http.FileServer(http.Dir(staticResourcePath)).ServeHTTP(w, r)
		}
		return
	}

	for prefix := range clientsMapping {
		if strings.HasPrefix(path, prefix) {
			originalPath := strings.TrimPrefix(path, prefix)
			targetAddr := clientsMapping[prefix]
			if common.IsSecurityEnabled() {
				app.secure(w, r, originalPath, targetAddr)
			} else {
				insecure(w, r, originalPath, targetAddr)
			}
			return
		}
	}
}

func (app *Application) secure(w http.ResponseWriter, r *http.Request, originalPath string, client Client) {
	defer r.Body.Close()
	origin, _ := url.Parse(client.addr)
	director := func(req *http.Request) {
		req.Header.Add(ForwardedHostReqHeader, req.Host)
		req.Header.Add(OriginHostReqHeader, origin.Host)
		req.URL.Scheme = HttpProtocol
		req.URL.Host = origin.Host
		req.URL.Path = originalPath
	}
	rp := &httputil.ReverseProxy{Director: director, Transport: client.transport}
	rp.ServeHTTP(w, r)
}

func insecure(w http.ResponseWriter, r *http.Request, originalPath string, client Client) {
	defer r.Body.Close()
	origin, _ := url.Parse(client.addr)
	director := func(req *http.Request) {
		req.Header.Add(ForwardedHostReqHeader, req.Host)
		req.Header.Add(OriginHostReqHeader, origin.Host)
		req.URL.Scheme = HttpProtocol
		req.URL.Host = origin.Host
		req.URL.Path = originalPath
	}
	rp := &httputil.ReverseProxy{Director: director, Transport: client.transport}
	rp.ServeHTTP(w, r)
}
