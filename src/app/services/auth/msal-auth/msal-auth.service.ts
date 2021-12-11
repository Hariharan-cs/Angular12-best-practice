import { Observable, of, from, throwError } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  MsalService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PopupRequest } from '@azure/msal-browser';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MsalAuthService {
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private http: HttpClient,
    private msalService: MsalService,
    private router: Router
  ) {}

  isValidUser(accountDetails, group): Observable<boolean> {
    const accessTokenRequest = {
      scopes: ['user.read', 'Group.Read.All', 'User.Read.All'],
      account: accountDetails,
    };
    let userEmail = accountDetails[0]?.idTokenClaims?.preferred_username;
    let url = `https://graph.microsoft.com/v1.0/users/${userEmail}/memberOf`;
    return from(
      this.msalService.instance.acquireTokenSilent(accessTokenRequest)
    ).pipe(
      map((silent: any) => {
        console.log('silent', silent);
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${silent.accessToken}`,
          }),
        };
      }),
      mergeMap((httpOptions) => {
        return this.http.get(url, httpOptions).pipe(
          map((response: any) => {
            return response?.value?.some(
              (res) => res.displayName.toLocaleLowerCase() === group
            );
          })
        );
      }),
      map((finalResult) => {
        if(!finalResult){
          this.logout()
          this.router.navigate(['/']);
        }
        return finalResult;
      })
    );
  }

  logout() {
    this.msalService.logoutPopup({
      mainWindowRedirectUri: '/',
    });
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.msalService
        .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe({
          next: (result) => {
            this.isLoggedIn();
          },
          error: (error) => console.log(error),
        });
    } else {
      this.msalService.loginPopup().subscribe({
        next: (result) => {
          this.isLoggedIn();
        },
        error: (error) => console.log(error),
      });
    }
  }

  isLoggedIn() {
    this.isValidUserLoggedIn().subscribe((result) => {
      if (result) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  isValidUserLoggedIn(): Observable<boolean> {
    let accountDetails = this.msalService.instance.getAllAccounts();
    if (accountDetails.length > 0) {
      let group = 'compliancemanager';
      return this.isValidUser(accountDetails, group);
    } else {
      this.router.navigate(['/']);
      return of(false);
    }
  }
}
