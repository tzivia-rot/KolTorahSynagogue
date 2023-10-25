import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cardData = [
    {
      title: 'בית מדרש',
      content: 'Content for Card 1',
      imageUrl: 'path-to-image-1.jpg'
    },
    {
      title: 'קרנות גמח',
      content: 'Content for Card 2',
      imageUrl: 'path-to-image-2.jpg'
    },    {
      title: 'חבורת בני הישיבות',
      content: 'Content for Card 3',
      imageUrl: 'path-to-image-3.jpg'
    },    {
      title: 'עמדת שיעורים',
      content: 'Content for Card 4',
      imageUrl: 'path-to-image-4.jpg'
    },    {
      title: 'עמדת נדרים פלוס',
      content: 'Content for Card 5',
      imageUrl: 'path-to-image-5.jpg'
    },
   
  ];
}

