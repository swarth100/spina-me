import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ProjectsComponent} from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }
