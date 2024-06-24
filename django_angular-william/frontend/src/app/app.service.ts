import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string = 'http://localhost:8000/api/students/';

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.studentUrl}${id}`);
  }

  updateStudent(id: number, user: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentUrl}${id}/`, user);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.studentUrl}${id}/`);
  }

}


@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private courseUrl: string = 'http://localhost:8000/api/courses/';
  
  constructor(private http: HttpClient) { }
  
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseUrl, course);
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.courseUrl);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.courseUrl}${id}/`, course);
  }

  deleteCourse(id: number):  Observable<Course> {
    return this.http.delete<Course>(`${this.courseUrl}${id}/`);
  }


}
