import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

initTWE({ Carousel });
@NgModule({
  declarations: [
  
    SidebarComponent,
       FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
