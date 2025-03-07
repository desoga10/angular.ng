import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-new-customers',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './new-customers.component.html',
})
export class AppNewCustomersComponent {
  constructor() {}
}
