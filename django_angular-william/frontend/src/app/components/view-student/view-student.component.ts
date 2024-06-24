import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../app.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
})
export class ViewStudentComponent {
  students: any | undefined;

  constructor(private studentService: StudentService) { 
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      console.log(data)
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
