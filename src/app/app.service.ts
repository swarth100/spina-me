import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    constructor(private http: Http) {}

    /*
  postLogin(body) {
    this.http
      .post('/api/login',
        body)
      .subscribe(data => {
        console.log(data);
        return data.text();
      }, error => {
      });
  }
  */
}
