import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { AppCustomersWeekComponent } from 'src/app/components/dashboard1/customers-week/customers-week.component';
import { AppCustomersComponent } from 'src/app/components/dashboard1/customers/customers.component';
import { AppProjectsComponent } from 'src/app/components/dashboard1/projects/projects.component';
import { AppRevenueForecastComponent } from 'src/app/components/dashboard1/revenue-forecast/revenue-forecast.component';
import { AppRevenueProductComponent } from 'src/app/components/dashboard1/revenue-product/revenue-product.component';
import { AppSalesOverviewComponent } from 'src/app/components/dashboard1/sales-overview/sales-overview.component';
import { AppTotalSettlementsComponent } from 'src/app/components/dashboard1/total-settlements/total-settlements.component';
import { AppWelcomeCardComponent } from 'src/app/components/dashboard1/welcome-card/welcome-card.component';
import { AppYourPerformanceComponent } from 'src/app/components/dashboard1/your-performance/your-performance.component';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [
    TablerIconsModule,
    AppCustomersComponent,
    AppWelcomeCardComponent,
    AppProjectsComponent,
    AppRevenueForecastComponent,
    AppCustomersWeekComponent,
    AppSalesOverviewComponent,
    AppYourPerformanceComponent,
    AppTotalSettlementsComponent,
    AppRevenueProductComponent,
  ],
  templateUrl: './dashboard1.component.html',
})
export class AppDashboard1Component {
  constructor() {}
}
