import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';

@Component({
  selector: 'app-nav-menu-bar',
  templateUrl: './nav-menu-bar.component.html',
  styleUrls: ['./nav-menu-bar.component.scss'],
})
export class NavMenuBarComponent implements OnInit {
  
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  constructor(private jwtAuth: JwtAuthService, private msalAuth: MsalAuthService) {}

  ngOnInit() {}

  logout(): void {
    let loginType: String = 'microsoft'; // 'google', 'jwt'
    if (loginType === 'jwt') {
      this.jwtAuth.logout();
    } else if (loginType === 'microsoft') {
      this.msalAuth.logout();
    }
  }

  public mainMenus = [
    { link: 'about', name: 'Dashboard', icon: '../../../../../assets/icons/right_arrow' },
    { link: 'locations', name: 'Breach Assessment', icon: '../../../../../assets/icons/right_arrow' },
    { link: 'locations', name: 'Privacy Assessment', icon: '../../../../../assets/icons/right_arrow' },
    { link: 'locations', name: 'Actions', icon: '../../../../../assets/icons/right_arrow' },
    { link: 'locations', name: 'Reports', icon: 'reports' },
    { link: 'locations', name: 'Status', icon: 'status' },
    { link: 'locations', name: 'Notifications', icon: 'notification' },
  ];
  public bottomMenus = [
    { link: 'about', name: 'Customize', icon: 'customize' },
    { link: 'about', name: 'Settings', icon: 'settings' },
  ]
  public logoutMenu = [
    { link: 'about', name: 'Logout', icon: 'logout' },
  ]
}
