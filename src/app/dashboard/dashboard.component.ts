import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

declare let Materialize: any;

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
    this.newPrj();
  }

  retrieveProjects() {
    this.http
      .get('/api/projects')
      .subscribe(data => {
          const retdata = JSON.parse(data.text());
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
    console.log(this.selectedPrj);
    if (this.selectedPrj.title) {
      this.http
        .post('/api/updateProjects/' + this.hash, this.selectedPrj)
        .subscribe(data => {
          const retdata = JSON.parse(data.text());
          this.retrieveProjects();
        }, error => {
          /* Handle login error */
        });
    }
  }

  public removePrj() {
    if (this.selectedPrj.title) {
      this.http
        .post('/api/removeProjects/' + this.hash, this.selectedPrj)
        .subscribe(data => {
          const retdata = JSON.parse(data.text());
          this.retrieveProjects();
        }, error => {
          /* Handle login error */
        });
    }
  }

}
