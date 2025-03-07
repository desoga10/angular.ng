import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './welcome-card.component.html',
})
export class AppWelcomeCardComponent {
  constructor() {}
}
