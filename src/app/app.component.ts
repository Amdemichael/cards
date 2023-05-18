import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      userName: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'Saw this awesome tree during my hike today',
    },
    {
      title: 'Neat Tree',
      userName: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      userName: 'biking12222',
      imageUrl: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
