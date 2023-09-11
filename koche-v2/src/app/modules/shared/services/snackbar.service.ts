import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../elements/snackbar/snackbar.component';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  duration = 4000;

  openSnackBar(message: string, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: this.duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [panelClass],
    });
  }
}
