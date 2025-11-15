import { Component, input, output, inject } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { ViewportScroller } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterLink } from '@angular/router';

interface apps {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

interface demos {
  id: number;
  name: string;
  url: string;
  imgSrc: string;
}

interface testimonials {
  id: number;
  name: string;
  subtext: string;
  imgSrc: string;
}

interface features {
  id: number;
  icon: string;
  title: string;
  subtext: string;
}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule, RouterLink],
  templateUrl: './landingpage.component.html',
})
export class AppLandingpageComponent {
  // Public properties
  public showToggle = input<boolean>(true);
  public toggleMobileNav = output<void>();
  public toggleMobileFilterNav = output<void>();
  public toggleCollapsed = output<void>();

  // Private properties
  private settings = inject(CoreService);
  private scroller = inject(ViewportScroller);
  private options = this.settings.getOptions();

  constructor() {}

  // scroll to demos
  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }

  apps: apps[] = [
    {
      id: 1,
      icon: 'solar:cash-out-bold',
      title: 'Currency Converter',
      subtitle: 'Convert currency in seconds',
      link: '/apps/converter',
    },
    {
      id: 2,
      icon: 'solar:bill-list-line-duotone',
      title: 'Invoice App',
      subtitle: 'Create and manage your invoice',
      link: '/apps/invoice',
    },
  ];
}
