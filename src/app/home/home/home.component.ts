import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../logic/services/auth.service";
import {filter, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userData$: Observable<any> = new Observable<any>();
  public userName: string = '';
  public subscriptions$ = new Subscription();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userData$ = this.authService.getUserData$();
    this.subscriptions$.add(
      this.userData$.pipe(filter((data) => !!data)).subscribe((usr) => {
        if (usr) {
          this.userName = usr.displayName;
        }
      }));
  }

}
