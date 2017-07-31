import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';
import {Router} from '@angular/router'
import {AppStorage} from '../app-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private http: Http, private router: Router, private storage: AppStorage) { }

  ngOnInit() {
  }

  postLogin(body) {
    this.http
      .post('/api/login',
        body)
      .subscribe(data => {
        const retdata = JSON.parse(data.text());
        console.log(retdata);

        this.storage.saveHash(retdata.hash);
        this.storage.saveUsername(retdata.username);

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
