/*******************************************************************************
 * Copyright © 2021-2022 VMware, Inc. All Rights Reserved.
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, mergeMap, Observable} from 'rxjs';

import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string | null = null;
  registryToken: string | null = null;
  isLoggedIn: boolean = false;
  isRegistryLoggedIn: boolean = false;
  redirectUrl: string | null = null;
  isSecureMode: boolean = false;

  constructor(private http: HttpClient, private errorSvc: ErrorService) { }

  login(url:string): Observable<any>{
    return this.tokenValidate(url).pipe(
      mergeMap(this.registryTokenValidate.bind(this))
    )
  }

  tokenValidate(url:string): Observable<any> {
    console.info("testing : " + url)
    return this.http.get(url);
  }

  registryTokenValidate(url:string): Observable<any> {
    //let url = "/api/v3/registrycenter/ping";
    return this.http.get(url);
  }

  setAccessToken(token: string | null) {
    this.accessToken = token;
    window.sessionStorage.setItem("EdgeX_Access_Token",this.accessToken as string);
  }

  setRegistryToken(token: string | null) {
    this.registryToken = token;
    window.sessionStorage.setItem("EdgeX_Registry_Token",this.registryToken as string);
  }

  getAccessToken(): string | null {
    if (this.accessToken) {
      return this.accessToken
    }
    let token = window.sessionStorage.getItem("EdgeX_Access_Token");
    if (token) {
      this.accessToken = token
    }
    return this.accessToken
  }
  getRegistryAccessToken(): string | null {
    if (this.registryToken) {
      return this.registryToken
    }
    let token = window.sessionStorage.getItem("EdgeX_Registry_Token");
    if (token) {
      this.registryToken = token
    }
    return this.registryToken
  }
}
