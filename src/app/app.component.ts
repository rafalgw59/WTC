import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { TranslateService } from '@ngx-translate/core';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'push-notification';
  message:any;
  constructor(public translate: TranslateService) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('pl');
  }
  ngOnInit(): void {
  }

}




