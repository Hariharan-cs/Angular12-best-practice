import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicrosoftLoginComponent } from './microsoft-login/microsoft-login.component';
import { JwtLoginComponent } from './jwt-login/jwt-login.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { MsalModule, MsalGuard, MsalInterceptor } from '@azure/msal-angular'; // Import MsalInterceptor
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

import { UserService } from 'src/app/services/user/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import
import { AuthGuard } from 'src/app/guard/auth.guard';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [MicrosoftLoginComponent, JwtLoginComponent, LoginComponent],
  imports: [
    CommonModule,
    // NgbModule,
    LoginRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule, 
    HttpClientModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '20e32ff0-2c3e-496c-86a3-3ea4fea80980', // This is your client ID
          // authority: 'Enter_the_Cloud_Instance_Id_Here'/'Enter_the_Tenant_Info_Here', // This is your tenant ID
          redirectUri: 'http://localhost:4200', // This is your redirect URI
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read', 'Group.Read.All', 'User.Read.All'],
        },
      },
      {
        interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
        protectedResourceMap: new Map([
          [
            'https://graph.microsoft.com/v1.0/me',
            ['user.read', 'Group.Read.All', 'User.Read.All'],
          ],
        ]),
      }
    ),
    MaterialModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
    AuthGuard,
  ],
})
export class LoginModule {}
