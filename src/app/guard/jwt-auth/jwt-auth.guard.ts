import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MsalAuthGuard } from '../msal-auth/msal-auth.guard';
import { Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthGuard implements CanActivate {
  constructor(private msalAuthGuard: MsalAuthGuard, private jwtAuthService: JwtAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.jwtAuthService.isLoggedIn();
  }
}
