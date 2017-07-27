import { Component, OnInit } from '@angular/core';

import {AppService} from 'app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  public submit() {
    console.log('Got submit');
    this.appService.postLogin({
      'username': this.username,
      'password': this.password,
    });
  }

}
