import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';

const routes: Routes = [
  { path: '', component: ViewStudentComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent},

  { path: 'courses', component: ViewCourseComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'updatecourse/:id', component: UpdateCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
