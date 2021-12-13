import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from 'src/app/animations/sidenav.animation';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth/jwt-auth.service';
import { MsalAuthService } from 'src/app/services/auth/msal-auth/msal-auth.service';
import { SidenavService } from 'src/app/services/commons/sidenav/sidenav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [ onMainContentChange ]
})
export class SideBarComponent implements OnInit {
  visibleSidebar;
  public onSideNavChange: boolean;

  constructor(
    private jwtAuth: JwtAuthService,
    private msalAuth: MsalAuthService,
    private _sidenavService: SidenavService
  ) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {
  }

  // logout(): void {
  //   let loginType: String = 'microsoft'; // 'google', 'jwt'
  //   if (loginType === 'jwt') {
  //     this.jwtAuth.logout();
  //   } else if (loginType === 'microsoft') {
  //     this.msalAuth.logout();
  //   }
  // }



}
