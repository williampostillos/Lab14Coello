import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
})
export class AddCourseComponent implements OnInit{

  constructor(private courseservice: CourseService, private router: Router) {
  }

  ngOnInit(): void {
  }

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  addCourse() {
    this.data = this.form.value;
    this.courseservice.addCourse(this.data).subscribe(() => {
      // redirect to home page
      this.router.navigate(['/courses']);
    });
  }
}