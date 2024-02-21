import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import * as $ from 'jquery';

@Component({
    selector: 'app-teaching',
    templateUrl: './teaching.component.html',
})
export class TeachingComponent implements OnInit {
    projects: any;

    constructor(private http: Http) {}

    ngOnInit() {
        this.retrieveTeachingProjects();
    }

    retrieveTeachingProjects() {
        this.http.get('/api/projects/teaching').subscribe(
            (data) => {
                const retdata = JSON.parse(data.text());
                // console.log(retdata);
                this.projects = retdata;

                $(document).ready(initialiseComponents);
            },
            (error) => {
                /* Handle login error */
            }
        );
    }

    getYear(project) {
        return project.date.split('/')[2];
    }
}
