import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { course } from '../../courses/course';
import { CourseService } from '../../courses/course.service';
import { MaterialModule } from 'src/app/material.module';
@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class AppConverterComponent {
  selectedCategory = 'All';
  courseList: course[] = [];

  constructor(private courseService: CourseService) {
    this.courseList = this.courseService.getCourse();
  }

  ddlChange(ob: any): void {
    const filterValue = ob.value;
    console.log(filterValue);
    if (filterValue === 'All') {
      this.courseList = this.courseService.getCourse();
    } else {
      this.courseList = this.courseService
        .getCourse()
        .filter((course) => course.courseFramework === filterValue);
    }
  }
}
