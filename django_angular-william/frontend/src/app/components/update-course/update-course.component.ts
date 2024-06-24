import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/app.service';
import { Course } from 'src/app/Course';

@Component({
    selector: 'app-update-course',
    templateUrl: './update-course.component.html',
})
export class UpdateCourseComponent{

    course?: any
    data: any

    constructor(private service: CourseService, private route: ActivatedRoute, private router : Router) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.service.getCourse(id).subscribe(data => {
          this.course = data
          console.log(this.course)
        })
      }
    
      form = new FormGroup({
        name: new FormControl('', [Validators.required]),
      })
    
      submit(){
        this.data = this.form.value
        this.course.name = this.data.name
        console.log(this.data)
        
        this.service.updateCourse(this.course?.id, this.course).subscribe(data => {
          console.log(data)
        })
    
        this.router.navigate(['/courses']);
    }
    
}