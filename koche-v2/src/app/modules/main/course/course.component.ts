import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  openMenu() {
    this.trigger.openMenu();
  }

  closeMenu() {
    this.trigger.closeMenu()
  }
}
