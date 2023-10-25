import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'synagogueKolTorah';
  slides = [
    {
      url: 'https://source.unsplash.com/1600x900/?nature,water'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]
}
