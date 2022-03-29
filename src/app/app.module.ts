import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from 'src/environments/environment.prod';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
