
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/operators/map';  // from Motto video

import { Student } from './models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    console.log('Students service okay...');
    return this.http.get<Student[]>('./assets/samplejson/students.json');
  }

  getStudent(id): Observable<Student> {
    console.log('Student service ok');
    return this.http.get<any[]>('./assets/samplejson/students.json').pipe(
      map(data => data.find(x => x.id === id))
    );
  }

  // Todd Motto Way:

  // getMotto(): Observable<Student[]> {
  //   return this.http
  //     .get('./assets/samplejson/students.json')
  //     .pipe(map((response) => response.json()));
  // }

}
