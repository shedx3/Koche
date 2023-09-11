import { Component,Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-snackbar',
  template: `<div class="snack-content">
    <div class="d-flex align-items-center">
      <span class="info-icon"><mat-icon>info</mat-icon></span>
      <span>{{ data }}</span>
    </div>
    <span class="cancel-snack">
      <mat-icon (click)="snackBarRef.dismiss()">close</mat-icon>
    </span>
  </div>`,
  styles: [
    `
      .snack-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
      }

      .info-icon {
        margin-right: 1rem;
      }

      .cancel-snack {
        cursor: pointer;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) {}
}
