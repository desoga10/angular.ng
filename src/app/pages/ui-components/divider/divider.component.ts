import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [MatDividerModule, MatListModule, MatCardModule],
  templateUrl: './divider.component.html',
})
export class AppDividerComponent {}
