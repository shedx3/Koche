import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeAnimation } from '../animations/animations.component';
@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
  animations:[fadeAnimation]
})
export class CustomAlertComponent implements OnInit {
  @Input()
  buttonName!: string;
  @Input()
  message!: string;
  @Input()
  title!: string;
  @Input()
  alertType!: string;
  icon!: any;
  @Input()
  callback!: () => void;

  constructor(sanitizer: DomSanitizer) {
    switch (this.alertType) {
      case 'error':
        this.icon = sanitizer.bypassSecurityTrustUrl(
          `assets/icons/error-icon.svg`
        );
        break;

      default:
        this.icon = sanitizer.bypassSecurityTrustUrl(
          `assets/icons/success-icon.svg`
        );
        break;
    }
  }

  ngOnInit(): void {}

  btnClicked() {
    this.callback();
  }
}
