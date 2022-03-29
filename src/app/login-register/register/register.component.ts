import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public submitRegister(name: string, username: string, email: string, password: string): void {
    console.log('Name: ', name);
    console.log('Username: ', username);
    console.log('Email: ', email);
    console.log('Password: ', password);
  }

}
