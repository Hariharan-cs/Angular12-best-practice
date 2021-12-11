import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';

@Component({
  selector: 'app-microsoft-login',
  templateUrl: './microsoft-login.component.html',
  styleUrls: ['./microsoft-login.component.scss'],
})
export class MicrosoftLoginComponent implements OnInit {
  constructor(
    private msalAuthService: MsalAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn();
  }

  login() {
    this.msalAuthService.login();
  }

  isLoggedIn() {
    this.msalAuthService.isLoggedIn()
  }
}
