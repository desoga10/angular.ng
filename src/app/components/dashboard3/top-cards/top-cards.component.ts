import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

interface topcards {
  id: number;
  icon: string;
  color: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-top-cards',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './top-cards.component.html',
})
export class AppTopCardsComponent {
  topcards: topcards[] = [
    {
      id: 1,
      color: 'primary',
      icon: 'solar:dollar-minimalistic-linear',
      title: 'Total Orders',
      subtitle: '16,689',
    },
    {
      id: 2,
      color: 'warning',
      icon: 'solar:recive-twice-square-linear',
      title: 'Return Item',
      subtitle: '148',
    },
    {
      id: 3,
      color: 'accent',
      icon: 'ic:outline-backpack',
      title: 'Annual Budget',
      subtitle: '$156K',
    },
    {
      id: 4,
      color: 'error',
      icon: 'ic:baseline-sync-problem',
      title: 'Cancel Orders',
      subtitle: '64',
    },
    {
      id: 5,
      color: 'success',
      icon: 'ic:outline-forest',
      title: 'Total Income',
      subtitle: '$36,715',
    },
  ];
}
