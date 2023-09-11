import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'test', component: TestComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },

  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CourseModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
