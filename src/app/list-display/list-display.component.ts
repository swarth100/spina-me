import {Component, Input, OnInit} from '@angular/core';
import { Http } from '@angular/http';

import * as $ from 'jquery';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
})
export class ListDisplayComponent implements OnInit {
    @Input() title: string;
    @Input() component_id: string;
    @Input() items: any[];

    ngOnInit() {}


    getYear(project) {
        return project.date.split('/')[2];
    }
}
