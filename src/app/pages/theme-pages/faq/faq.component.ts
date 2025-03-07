import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatButtonModule],
  templateUrl: './faq.component.html',
})
export class AppFaqComponent {
  constructor() {}

  // 1 basic
  panelOpenState = false;
}
