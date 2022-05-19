import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import {TranslateModule} from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TimeTrackingComponent
    ],
    exports: [
        TimeTrackingComponent
    ],
    imports: [
      FormsModule,
        CommonModule,
        TranslateModule.forChild()
    ]
})
export class TimeTrackingModule { }
