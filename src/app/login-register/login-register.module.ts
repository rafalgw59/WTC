import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { RegisterComponent } from './register/register.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        LoginRegisterRoutingModule
    ]
})
export class LoginRegisterModule { }
