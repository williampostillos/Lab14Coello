import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/app.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
})
export class UpdateStudentComponent {

  student?: any
  data: any


  constructor(private service: StudentService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getStudent(id).subscribe(data => {
      this.student = data
      console.log(this.student)
    })
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    this.student.name = this.data.name
    this.student.lastname = this.data.lastname
    console.log(this.data)
    
    this.service.updateStudent(this.student?.id, this.student).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
