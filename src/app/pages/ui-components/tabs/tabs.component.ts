import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { TablerIconsModule } from 'angular-tabler-icons';
import {DatePipe} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatIconModule, TablerIconsModule, DatePipe, MatButtonModule],
  templateUrl: './tabs.component.html',
})
export class AppTabsComponent {
  constructor() {}

  // loaded lazily
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  // background
  links = ['Item One', 'Item Second', 'Item Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
