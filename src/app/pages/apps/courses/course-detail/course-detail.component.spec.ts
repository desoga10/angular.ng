import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCourseDetailComponent } from './course-detail.component';

describe('AppCourseDetailComponent', () => {
  let component: AppCourseDetailComponent;
  let fixture: ComponentFixture<AppCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCourseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
