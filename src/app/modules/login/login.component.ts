import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  disabled: boolean = false;
  faLock = faLock;
  loginType: String = 'microsoft'; // 'google', 'jwt'

  constructor() {}

  ngOnInit(): void {}
}
