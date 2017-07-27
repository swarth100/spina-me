import { Component, OnInit } from '@angular/core';

import {AppService} from 'app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
  }

  public submit() {
    console.log('Got submit');
    this.appService.postAPI();
  }

  /*
  public submit() {
    console.log('Got submit');
    this.http
      .post('/api/login', {})
      .subscribe(data => {
        console.log(data['results']);
      });
  }; */

}
