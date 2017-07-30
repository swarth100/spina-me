import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  hash: any;
  projects: any;
  selectedPrj: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.hash = 'foo';
    console.log('/api/projects/' + this.hash);
    this.retrieveProjects();
  }

  retrieveProjects() {
    this.http
      .get('/api/projects/' + this.hash)
      .subscribe(data => {
        const retdata = JSON.parse(data.text());
        console.log(retdata);
        this.projects = retdata;
      }, error => {
        /* Handle login error */
      });
  }

  public select(prj) {
    this.selectedPrj = prj;
  }

  public newPrj() {
    this.selectedPrj = {};
  }

  public updatePrj() {
    this.http
      .post('/api/updateProjects', this.selectedPrj)
      .subscribe(data => {
        const retdata = JSON.parse(data.text());
        this.retrieveProjects();
      }, error => {
        /* Handle login error */
      });
  }

}
