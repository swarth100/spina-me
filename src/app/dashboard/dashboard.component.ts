import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppStorage } from '../app-storage';
import { Router } from '@angular/router';

declare let Materialize: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    hash: any;
    projects: any;
    selectedPrj: any;

    constructor(
        private http: Http,
        private router: Router,
        private storage: AppStorage
    ) {}

    ngOnInit() {
        if (this.storage.hashNotNull()) {
            this.hash = this.storage.getData();
            this.retrieveProjects();
            this.newPrj();
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    retrieveProjects() {
        this.http.get('/api/projects').subscribe(
            (data) => {
                const retdata = JSON.parse(data.text());
                this.projects = retdata;

                /* Backwards compatibility! Add any missing fields (links/tags). */
                for (const prj of this.projects) {
                    prj.tags = [''];
                }

            },
            (error) => {
                /* Handle login error */
            }
        );
    }

    private newLinkObj() {
        return {
            name: '',
            link: '',
        };
    }

    public select(prj) {
        this.selectedPrj = prj;
    }

    public newPrj() {
        this.selectedPrj = {};
        this.selectedPrj.links = [this.newLinkObj()];
        this.selectedPrj.tags = [''];
    }

    public addLink() {
        this.selectedPrj.links.push(this.newLinkObj());
    }

    public removeLink(index) {
        this.selectedPrj.links.splice(index, 1);
    }

    public addTag() {
        this.selectedPrj.tags.push('');
    }

    public removeTag(index) {
        this.selectedPrj.tags.splice(index, 1);
    }

    public updatePrj() {
        console.log(this.selectedPrj);
        if (this.selectedPrj.title) {
            this.http
                .post('/api/updateProjects/' + this.hash, this.selectedPrj)
                .subscribe(
                    (data) => {
                        const retdata = JSON.parse(data.text());
                        this.retrieveProjects();
                    },
                    (error) => {
                        /* Handle login error */
                        this.router.navigateByUrl('/login');
                    }
                );
        }
    }

    public removePrj() {
        if (this.selectedPrj.title) {
            this.http
                .post('/api/removeProjects/' + this.hash, this.selectedPrj)
                .subscribe(
                    (data) => {
                        const retdata = JSON.parse(data.text());
                        this.retrieveProjects();
                        this.newPrj();
                    },
                    (error) => {
                        /* Handle login error */
                        this.router.navigateByUrl('/login');
                    }
                );
        }
    }

    trackByIdx(index, val) {
        return index;
    }
}
