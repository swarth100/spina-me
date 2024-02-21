import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppService } from 'app/app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterializeModule } from 'angular2-materialize';
import { AppStorage } from 'app/app-storage';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TeachingComponent,
        ProjectsComponent,
        PublicationsComponent,
        ContactComponent,
        LoginComponent,
        ErrorComponent,
        DashboardComponent,
        ListDisplayComponent,
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
    ],
    providers: [AppService, AppStorage],
    bootstrap: [AppComponent],
})
export class AppModule {}
