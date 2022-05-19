import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {LocalizeRouterModule} from "@gilsdav/ngx-translate-router";

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
  },
  {
  path: 'register',
  component: RegisterComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule {}
