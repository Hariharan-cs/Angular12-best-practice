import { Component, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from 'src/app/animations/sidenav.animation';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';
import { SidenavService } from 'src/app/services/commons/sidenav/sidenav.service';

@Component({
  selector: 'app-nav-menu-bar',
  templateUrl: './nav-menu-bar.component.html',
  styleUrls: ['./nav-menu-bar.component.scss'],
  animations: [onSideNavChange, animateText]

})
export class NavMenuBarComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Logout', link:'logout', icon: 'logout'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
    // {name: 'Inbox', link:'some-link', icon: 'inbox'},
    // {name: 'Starred', link:'some-link', icon: 'star'},
    // {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService, 
    private jwtAuth: JwtAuthService,
    private msalAuth: MsalAuthService,
    ) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

  logout(): void {
    let loginType: String = 'microsoft'; // 'google', 'jwt'
    if (loginType === 'jwt') {
      this.jwtAuth.logout();
    } else if (loginType === 'microsoft') {
      this.msalAuth.logout();
    }
  }

}
