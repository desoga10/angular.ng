import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DeleteAppTaskComponent {
  constructor() {}
}
