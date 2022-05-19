import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings} from "@gilsdav/ngx-translate-router";
import {LocalizeRouterHttpLoader} from "@gilsdav/ngx-translate-router-http-loader";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import { Location } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((mod) => mod.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LocalizeRouterModule.forRoot(routes, {
    parser: {
      provide: LocalizeParser,
      useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) =>
        new LocalizeRouterHttpLoader(translate, location, settings, http),
      deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
    }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
