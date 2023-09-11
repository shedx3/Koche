import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InProgressComponent } from './in-progress/in-progress.component';
// import { MatTabsModule } from '@angular/material/tabs'; 


@NgModule({
  declarations: [
    InProgressComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CourseModule { }
