import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private jwtAuth: JwtAuthService,
    private msalAuth: MsalAuthService
  ) {}

  ngOnInit(): void {}
  logout(): void {
    let loginType: String = 'microsoft'; // 'google', 'jwt'

    if (loginType === 'jwt') {
      this.jwtAuth.logout();
    } else if (loginType === 'microsoft') {
      this.msalAuth.logout();
    }
  }
}
