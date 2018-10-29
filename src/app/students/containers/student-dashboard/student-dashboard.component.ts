
import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/student.interface';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private service: StudentsService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.service.getStudents().subscribe((data) => this.students = data);
  }
}
