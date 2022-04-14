import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeModuleRouting } from './home-routing.module';
import {TimeTrackingModule} from "../time-tracking/time-tracking.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeModuleRouting,
        TimeTrackingModule
    ]
})
export class HomeModule { }
