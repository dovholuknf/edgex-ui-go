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

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {catchError, mergeMap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, forkJoin, Observable, of, throwError} from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { AuthService } from '../../../services/auth.service';
import { ErrorService } from '../../../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  accessToken: string | null = null;
  accessTokenIsValid: boolean = true;
  registryToken: string | null = null;
  registryTokenIsValid: boolean = true;

  constructor(private authSvc: AuthService, private errorSvc: ErrorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authSvc.setAccessToken(this.accessToken);
    this.authSvc.setRegistryToken(this.registryToken);
    /*

    const l1 = this.authSvc.login("/core-metadata/api/v3/ping")
      .pipe(
        catchError((error) => {
          this.loading = false;
          this.authSvc.isLoggedIn = false;
          this.accessToken = null;
          this.tokenIsValid = false;
          return throwError(error)
        })
      ).subscribe(() => {
      this.authSvc.isLoggedIn = true;
      this.loading = false;
      this.tokenIsValid = true;
      this.router.navigate(['/dashboard'], { relativeTo: this.route })
    });

    const l2 = this.authSvc.login("/api/v3/registrycenter/ping")
      .pipe(
        catchError((error) => {
          this.loading = false;
          this.authSvc.isRegistryLoggedIn = false;
          this.registryToken = null;
          this.registryTokenIsValid = false;
          return throwError(error)
        })
      ).subscribe(() => {
      this.authSvc.isRegistryLoggedIn = true;
      this.loading = false;
      this.registryTokenIsValid = true;
      this.router.navigate(['/dashboard'], { relativeTo: this.route })
    });

    forkJoin(l1,l2).subscribe((r) => {
      console.log(r);
    })

     */
    /*
    const r1 = new BehaviorSubject(false);
    const r2 = new BehaviorSubject(false);
    const a1 = this.authSvc.tokenValidate("/core-metadata/api/v3/ping").pipe(
      catchError((e)=>{
        this.authSvc.isLoggedIn = false;
        this.accessToken = null;
        this.accessTokenIsValid = false;
        r1.next(true);
        return throwError(e)
        //return of({});
      })
    ).subscribe(() => {
      this.authSvc.isLoggedIn = true;
      this.accessTokenIsValid = true;
      r1.next(true);
    });

    const a2=this.authSvc.registryTokenValidate("/api/v3/registrycenter/ping").pipe(
      catchError((e)=>{
        this.authSvc.isRegistryLoggedIn = false;
        this.registryToken = null;
        this.registryTokenIsValid = false;
        r2.next(true);
        return throwError(e)
        //return of({});
      })).subscribe(() => {
      this.authSvc.isRegistryLoggedIn = true;
      this.registryTokenIsValid = true;
      r2.next(true);
    });

    forkJoin(r1, r2).subscribe(() => {
      this.loading = false;
      }
    );

    */

    const o1 = this.authSvc.tokenValidate("/core-metadata/api/v3/ping");
    const o2= this.authSvc.registryTokenValidate("/api/v3/registrycenter/ping");

    combineLatest([o1, o2]).pipe(
      catchError(errors => {
        console.error('At least one observable encountered an error:', errors);
        // Handle the error if any observable encounters an error
        return [];
      })
    ).subscribe(([result1, result2]) => {
        if (result1) {
          this.authSvc.isLoggedIn = true;
          this.accessTokenIsValid = true;
        }
        if (result2){
          this.authSvc.isRegistryLoggedIn = true;
          this.registryTokenIsValid = true;
        }
        this.loading = false;
      }
    );
  }

  renderPopoverComponent() {
    $('[data-toggle="popover"]').popover({
      trigger: 'hover'
    });
  }

  onInput() {
    this.accessTokenIsValid = true;
    this.registryTokenIsValid = true;
  }
}
