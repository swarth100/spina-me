import { Http, Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  handleError: any;

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  postAPI() {
    const body = 'username=myusername&password=mypassword';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post('/api/login',
        body, {
          headers: headers
        })
      .subscribe(data => {
        alert('ok');
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
}
