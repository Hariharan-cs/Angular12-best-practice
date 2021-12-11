import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [MaterialModule],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatNativeDateModule
  ]
})
export class UserModule { }
