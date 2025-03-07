import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-ok-task',
  templateUrl: './ok-task.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class OkAppTaskComponent {
  constructor() {}
}
