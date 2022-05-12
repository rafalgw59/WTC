import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPanelRoutingModule } from "./admin-panel-routing.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    TranslateModule
  ]
})
export class AdminPanelModule { }
