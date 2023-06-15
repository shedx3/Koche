import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
  // Component code
  showOnboardingComponent: boolean = true;

  images = [
    {
      image: '../../../assets/images/slide1.png',
      title: 'first slide',
    },
    {
      image: 'assets/images/slide2.png',
      title: 'second slide',
    },
    {
      image: 'assets/images/slide3.png',
      title: 'third slide',
    },
  ];
}
