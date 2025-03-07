import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TablerIconsModule],
  templateUrl: './banners.component.html',
})
export class AppBannersComponent {
  constructor() {}
}
