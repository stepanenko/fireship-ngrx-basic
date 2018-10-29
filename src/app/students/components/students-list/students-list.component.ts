
import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/student.interface';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  stud: Student;
  students: any;
  activeStudent: Student;

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.getStudents();
    this.getStudent(1);
  }

  getStudents() {
    this.students = this.studentsService.getStudents();
      // .subscribe((students) => this.students = students);
  }

  getStudent(id): void {
    this.studentsService.getStudent(id)
      .subscribe((stud) => this.stud = stud);
  }

  selectStudent(student) {
    this.activeStudent = student;
  }
}
