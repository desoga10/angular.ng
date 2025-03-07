import { Injectable } from '@angular/core';
import { course } from './course';
import { courseList } from './course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public course = courseList;
  public getCourse(): course[] {
    return this.course;
  }
}
