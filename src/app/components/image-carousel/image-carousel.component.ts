import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  images = [
    'assets/img/1.jpg', 
    'assets/img/2.jpg',
    'assets/img/3.jpg'
  ];
  autoPlay = true;
  autoPlayInterval = 5000;
  private autoPlayTimer: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayTimer = setInterval(() => this.nextImage(), this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
