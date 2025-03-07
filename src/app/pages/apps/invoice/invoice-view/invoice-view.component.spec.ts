import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppInvoiceViewComponent } from './invoice-view.component';

describe('AppInvoiceViewComponent', () => {
  let component: AppInvoiceViewComponent;
  let fixture: ComponentFixture<AppInvoiceViewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppInvoiceViewComponent],
        imports: [ReactiveFormsModule, RouterTestingModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
