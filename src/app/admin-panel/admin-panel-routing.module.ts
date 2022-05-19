import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPanelRoutingModule {}
