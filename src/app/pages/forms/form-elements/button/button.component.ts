import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, TablerIconsModule],
  templateUrl: './button.component.html',
})
export class AppButtonComponent {
  constructor() {}

  //   reactive form
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
