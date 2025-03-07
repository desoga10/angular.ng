import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { course } from '../course';
import { CourseService } from '../course.service';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  standalone: true,
  imports: [MatCardModule, TablerIconsModule, MatStepperModule, MatInputModule, MatButtonModule, RouterModule],
  styleUrls: ['./course-detail.component.scss'],
})
export class AppCourseDetailComponent {
  id: any;
  courseDetail: course;

  constructor(activatedRouter: ActivatedRoute, courseService: CourseService) {
    this.id = activatedRouter?.snapshot?.paramMap?.get('id');
    this.courseDetail = courseService
      .getCourse()
      .filter((x) => x?.Id === +this.id)[0];
  }
}
