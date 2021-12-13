import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NavMenuBarComponent } from './components/nav-menu-bar/nav-menu-bar.component';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, ServicesComponent, AboutComponent, SideBarComponent, NavMenuBarComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
