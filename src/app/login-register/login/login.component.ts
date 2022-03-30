import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public submitLogin(username: string, password: string): void {
    console.log('Login: ', username);
    console.log('Password: ', password);
  }

}
