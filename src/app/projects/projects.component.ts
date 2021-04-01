import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import * as $ from 'jquery';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
    title = 'Projects';
    projects: any;

    constructor(private http: Http) {}

    ngOnInit() {
        this.retrieveProjects();
    }

    retrieveProjects() {
        this.http.get('/api/projects').subscribe(
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
