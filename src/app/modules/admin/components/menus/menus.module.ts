import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    MenusComponent,
    ResetPasswordComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class MenusModule {}
