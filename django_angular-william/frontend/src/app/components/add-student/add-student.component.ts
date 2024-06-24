import { Component, OnInit } from '@angular/core';
import { StudentService, CourseService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent implements OnInit {


  courses: any[] = [];

  constructor(private service: StudentService , private courseservice: CourseService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadCourses();
  }

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required)
  });

  loadCourses() {
    this.courseservice.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  addStudent() {
    this.data = this.form.value;
    this.service.addStudent(this.data).subscribe(() => {
      // redirect to home page
      this.router.navigate(['/']);
    });
  }
}
