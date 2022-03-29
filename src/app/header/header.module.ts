import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LocalizeRouterModule} from "@gilsdav/ngx-translate-router";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
      CommonModule,
      TranslateModule.forChild(),
      RouterModule,
      RouterModule.forChild([
        {
          path: '',
          component: HeaderComponent,
        },
      ]),
      LocalizeRouterModule
    ]
})
export class HeaderModule { }
