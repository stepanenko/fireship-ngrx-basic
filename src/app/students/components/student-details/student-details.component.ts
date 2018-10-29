
import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  @Input()
  items: Student[];
  constructor() {}

}
