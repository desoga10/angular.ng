import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './profile-card.component.html',
})
export class AppProfileCardComponent {
  constructor() {}
}
