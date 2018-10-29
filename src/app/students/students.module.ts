
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Containers
import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';

// Components
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsService } from './students.service';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StudentDashboardComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule {}
