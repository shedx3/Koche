import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TestComponent } from './test/test.component'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    CourseComponent,
    TestComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,ReactiveFormsModule,
    MatTabsModule,MatMenuModule,MatIconModule,MatInputModule
  ]
})
export class MainModule { }
