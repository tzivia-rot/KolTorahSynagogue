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
      imageUrl: 'assets/img/1.jpg'
    },
    {
      title: 'קרנות גמח',
      content: 'Content for Card 2',
      imageUrl: 'assets/img/4.jpg'
    },    {
      title: 'חבורת בני הישיבות',
      content: 'Content for Card 3',
      imageUrl: 'assets/img/5.png'
    },    {
      title: 'עמדת שיעורים',
      content: 'Content for Card 4',
      imageUrl: 'assets/img/3.jpg'
    },    {
      title: 'עמדת נדרים פלוס',
      content: 'Content for Card 5',
      imageUrl: 'assets/img/2.jpg'
    },
   
  ];
}

