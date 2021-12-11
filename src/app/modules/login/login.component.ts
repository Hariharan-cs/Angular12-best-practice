import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit  {
  disabled = false;
  faLock = faLock;

  constructor() {}

  ngOnInit(): void {
    this.disabled = true;
  }

  ngAfterViewInit() {
    this.disabled = false;
  }

}
