import {Injectable} from '@angular/core';


@Injectable()
export class AppStorage {
  hash: String = '';
  username: String = '';

  saveHash(hash) {
    this.hash = hash;
  }

  saveUsername(user) {
    this.username = user;
  }

  getData() {
    return this.username + '/' + this.hash;
  }

  hashNotNull() {
    return this.hash !== '';
  }
}
