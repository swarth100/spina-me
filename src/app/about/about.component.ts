import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
})
export class AboutComponent {
    title = 'About';

    /* */
    story = [
        'Software Engineer at Citadel.',
        'Ex-Two Sigma Software Engineer (VENN & TSIQ).',
        "I'm an Imperial College graduate and passionate computer scientist. I have always loved to challenge myself with a number of side projects. It all started in 2014 I worked with an Arduino Uno (and Python) making '#SEM2.0', a fully automated ElectroMagnetic Chessboard. I have since explored other programming languages, working with Java, C, C++, Python, Javascript and Typescript. You can find my projects listed below and linked to my GitHub/GitLab accounts. ",
    ];

    /* Dynamically generate and update the displayed age */
    age() {
        let birthdate = new Date('1996-09-22');
        let timeDiff = Math.abs(Date.now() - birthdate.getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }

    /* */
    details = [
        {
            title: 'Name:',
            content: 'Alberto Spina',
        },
        {
            title: 'Age:',
            content: this.age() + ' years old',
        },
        {
            title: 'Current Employment:',
            content: 'Software Engineer at Citadel, ex-Two Sigma',
        },
        {
            title: 'Education:',
            content: 'MEng Computing, Imperial College London',
        },
        {
            title: 'Location:',
            content: 'London, United Kingdom',
        },
    ];
}
