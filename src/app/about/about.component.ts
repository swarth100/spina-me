import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
  title = 'About';

  /* */
  story = ["Software Engineer at Two Sigma.",
  "Before that G-Research intern in the Technology Innovation group.",
  "I'm an Imperial College graduate and passionate computer scientist; I've always loved to challenge myself with a number of side projects. It all started in 2014 I worked with an Arduino Uno (and Python) making '#SEM2.0', a fully automated ElectroMagnetic Chessboard. I've sinceexplored other programming languages, working with Java, C, C++, Python, Javascript and Typescript. You can find most of them on my GitHub/GitLab accounts, or listed below. "];

  /* */
  details = [
    {
      'title': 'Name:',
      'content': 'Alberto Spina',
    },
    {
      'title': 'Age:',
      'content': '24 years old',
    },
    {
      'title': 'Current Employment:',
      'content': 'Student, Imperial College London',
    },
    {
      'title': 'Location:',
      'content': 'London, United Kingdom',
    },
  ];
}

