import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  username: any;
  password: any;
  hash: any;

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  postLogin(body) {
    this.http
      .post('/api/login',
        body)
      .subscribe(data => {
        const retdata = JSON.parse(data.text());
        console.log(retdata);
        this.username = retdata.username;
        this.password = retdata.password;
        /* TODO: Add save to hash for future checks */
        this.hash = retdata.hash;
        /* */
        this.router.navigateByUrl('/dashboard');
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
