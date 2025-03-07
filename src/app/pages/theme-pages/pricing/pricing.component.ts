import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 1
interface rules {
  title: string;
  limit: boolean;
}

interface pricecards {
  id: number;
  imgSrc: string;
  plan: string;
  btnText: string;
  free: boolean;
  planPrice?: Number;
  popular?: boolean;
  rules: rules[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports:[TablerIconsModule, MatCardModule, MatSlideToggleModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class AppPricingComponent {
  show = false;

  // yearlyPrice: any = (a: any, b: number) => ;

  yearlyPrice(a: any) {
    return a * 12;
  }

  // card 1
  pricecards: pricecards[] = [
    {
      id: 1,
      plan: 'Silver',
      imgSrc: '/assets/images/backgrounds/silver.png',
      btnText: 'Choose Silver',
      free: true,
      rules: [
        {
          title: '3 Members',
          limit: true,
        },
        {
          title: 'Single Device',
          limit: true,
        },
        {
          title: '50GB Storage',
          limit: false,
        },
        {
          title: 'Monthly Backups',
          limit: false,
        },
        {
          title: 'Permissions & workflows',
          limit: false,
        },
      ],
    },
    {
      id: 2,
      plan: 'Bronze',
      imgSrc: '/assets/images/backgrounds/bronze.png',
      btnText: 'Choose Bronze',
      free: false,
      popular: true,
      planPrice: 10.99,
      rules: [
        {
          title: '5 Members',
          limit: true,
        },
        {
          title: 'Multiple Device',
          limit: true,
        },
        {
          title: '80GB Storage',
          limit: false,
        },
        {
          title: 'Monthly Backups',
          limit: false,
        },
        {
          title: 'Permissions & workflows',
          limit: false,
        },
      ],
    },
    {
      id: 3,
      plan: 'Gold',
      imgSrc: '/assets/images/backgrounds/gold.png',
      btnText: 'Choose Gold ',
      free: false,
      planPrice: 22.99,
      rules: [
        {
          title: 'Unlimited Members',
          limit: true,
        },
        {
          title: 'Multiple  Device',
          limit: true,
        },
        {
          title: '150GB  Storage',
          limit: true,
        },
        {
          title: 'Monthly Backups',
          limit: true,
        },
        {
          title: 'Permissions & workflows',
          limit: true,
        },
      ],
    },
  ];

  constructor() {}
}
