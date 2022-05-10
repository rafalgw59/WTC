import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimeDateService {

  constructor(public http_: HttpClient) { }

  public getDateTime$() {
    return this.http_.get<any>('https://zegarek.cc/get_time', { responseType: 'text' as 'json'});
  }
}
