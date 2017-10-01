import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
  title = 'About';

  /* */
  story = "Hello there! I'm Alberto Spina and I'm currently studying Computer Science at Imperial College London. Even though much of my current work is University related, I've always loved to challenge myself with a number of side projects. Back in 2014 I worked with an Arduino Uno (and Python) making '#SEM2.0', a fully automated ElectroMagnetic Chessboard. I've since tried to explore other programming languages, working with Java, C, C++, Go and Javascript. You will find most of them on my GitHub/GitLab accounts, or listed below." ;

  /* */
  details = [
    {
      'title': 'Name:',
      'content': 'Alberto Spina',
    },
    {
      'title': 'Age:',
      'content': '20 years old',
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

