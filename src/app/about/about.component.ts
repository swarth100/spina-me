import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
})
export class AboutComponent {
    title = 'About';

    /* */
    story = [
        'Software Engineer in Finance.',
        'Ex-Citadel Commodities.',
        'Ex-Two Sigma Software Engineer (VENN & TSIQ).',
        'As an Imperial College graduate with a flair for computer science and finance, I\'ve spearheaded impactful projects at Citadel and Two Sigma, blending technology with financial insights. My passion extends beyond the professional realm into mentoring, volunteering and teaching, leveraging my expertise in programming languages like Python, Java, and C++ to foster innovation. Read more on this page to find information and links for my teaching, open-source projects and publications.',
    ];

    /* Dynamically generate and update the displayed age */
    age() {
        const birthdate = new Date('1996-09-22');
        const timeDiff = Math.abs(Date.now() - birthdate.getTime());
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
            content: 'Software Engineer in Finance | ex-Citadel | ex-Two Sigma',
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
