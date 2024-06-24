import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../app.service';

@Component({
    selector: 'app-view-course',
    templateUrl: './view-course.component.html',
})
export class ViewCourseComponent {
    courses: any | undefined;

    constructor(private courseService: CourseService) {
    }

    ngOnInit(): void{
        this.courseService.getCourses().subscribe(data => {
            this.courses = data;
            console.log(data)
        });
    }

    deletecourse(id: number) {
        this.courseService.deleteCourse(id).subscribe(data => {
            console.log(data);
            this.ngOnInit();
          });
      }
}