import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [MatProgressBarModule, MatCardModule, FormsModule, MatSliderModule, MatRadioModule],
  templateUrl: './progress.component.html',
})
export class AppProgressComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() {}

  ngOnInit(): void {}
}
