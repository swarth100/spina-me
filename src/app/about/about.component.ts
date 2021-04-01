import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
})
export class AboutComponent {
    title = 'About';

    /* */
    story = [
        'Software Engineer at Two Sigma.',
        'Before that G-Research intern in the Technology Innovation Group.',
        "I'm an Imperial College graduate and passionate computer scientist; I've always loved to challenge myself with a number of side projects. It all started in 2014 I worked with an Arduino Uno (and Python) making '#SEM2.0', a fully automated ElectroMagnetic Chessboard. I've sinceexplored other programming languages, working with Java, C, C++, Python, Javascript and Typescript. You can find most of them on my GitHub/GitLab accounts, or listed below. ",
    ];

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
            content: 'Software Engineer, Two Sigma',
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
