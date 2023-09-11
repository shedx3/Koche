import { Component,Input } from '@angular/core';
import { Carousel } from '../../interface/carousel';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images: Carousel[] = [];
  @Input() controls = true;
  selectedIndex = 0;

  prev() {
    if (this.selectedIndex == 0) {
    } else {
      this.selectedIndex--;
    }
  }
  next() {
    if (this.selectedIndex == this.images.length - 1) {
    } else {
      this.selectedIndex++;
    }
  }
}
