import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { MsalGuard, MsalService } from '@azure/msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MsalAuthGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private msalService: MsalService,
    private router: Router,
    private msalGuard: MsalGuard,
    private msalAuthService: MsalAuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.msalAuthService.isValidUserLoggedIn();
  }
}
