import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component'; 
 
const routes: Routes = [
  {
    path: '',
    component: MenusComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'users', component: UsersComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '', redirectTo: '/admin/menus/dashboard', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MenusRoutingModule { }
