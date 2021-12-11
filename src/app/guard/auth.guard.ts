import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MsalAuthGuard } from './msal-auth/msal-auth.guard';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private msalAuthGuard: MsalAuthGuard,
    private jwtAuthGuard: JwtAuthGuard,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let loginType: String = 'microsoft'; // 'google', 'jwt'
    if (loginType === 'microsoft') {
      return this.msalAuthGuard.canActivate(route, state);
    } else if (loginType === 'jwt') {
      return this.jwtAuthGuard.canActivate(route, state);
    } else {
      this.router.navigate(['/']);
      return of(false);
    }
  }
}
