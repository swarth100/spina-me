import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
  title = 'About';

  /* */
  story = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in suscipit sem. Duis et leo velit. Nullam' +
    ' egestas et ipsum sed sagittis. Suspendisse lacus ipsum, mollis sed metus sed, finibus accumsan lectus. Vivamus' +
    ' tristique, arcu in dignissim luctus, velit tellus varius tortor, vel semper urna tellus vitae sem. Nam vel' +
    ' lectus velit. Aliquam id pulvinar mi, vel pharetra libero. Cras condimentum ipsum sed libero efficitur, et' +
    ' laoreet libero consequat. Pellentesque sagittis, leo a fermentum euismod, mauris mi maximus quam, in tincidunt' +
    ' leo orci in neque. Proin maximus eros sapien, vestibulum venenatis lacus tincidunt ut. Nunc posuere purus a' +
    ' nibh posuere, at semper orci suscipit.';

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

