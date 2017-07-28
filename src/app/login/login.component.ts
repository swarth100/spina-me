import { Component, OnInit } from '@angular/core';

import {AppService} from 'app/app.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private appService: AppService, private http: Http) { }

  ngOnInit() {
  }

  postLogin(body) {
    this.http
      .post('/api/login',
        body)
      .subscribe(data => {
        console.log(data);
        console.log(data.text());
      }, error => {
        /* Handle login error */
      });
  }

  public submit() {
    console.log('Got submit');
    this.postLogin({
      'username': this.username,
      'password': this.password,
    });
  }

}
