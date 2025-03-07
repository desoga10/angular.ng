import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardComponent {
  constructor() {}
}
