import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { CarouselComponent } from './elements/carousel/carousel.component';
import { NativeButtonComponent } from './elements/native-button/native-button.component';
import { SnackbarComponent } from './elements/snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomAlertComponent } from './elements/custom-alert/custom-alert.component';
import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    CarouselComponent,
    NativeButtonComponent,
    SnackbarComponent,
    CustomAlertComponent,
    TimePipe,
  
  ],
  
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    NativeButtonComponent,
    CarouselComponent,
    CustomAlertComponent,
    TimePipe
    
  ]
})
export class SharedModule { }
