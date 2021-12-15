import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public isExpanded = false;

  constructor() {}

  ngOnInit(): void { }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
