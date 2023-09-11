import { Component,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-native-button',
  templateUrl: './native-button.component.html',
  styleUrls: ['./native-button.component.scss'],
})
export class NativeButtonComponent implements OnInit {
  @Input()
  buttonClass!: string;
  @Input()
  type!: string;
  @Input()
  submitting!: boolean;
  @Input()
  block!: boolean;
  @Input()
  disabled!: boolean;
  @Input()
  name!: string;

  constructor() {}

  ngOnInit(): void {}
}
