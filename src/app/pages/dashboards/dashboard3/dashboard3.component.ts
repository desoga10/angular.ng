import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { AppCustomersWeekComponent } from 'src/app/components/dashboard1/customers-week/customers-week.component';
import { AppRevenueProductComponent } from 'src/app/components/dashboard1/revenue-product/revenue-product.component';
import { AppSalesOverviewComponent } from 'src/app/components/dashboard1/sales-overview/sales-overview.component';
import { AppTotalSettlementsComponent } from 'src/app/components/dashboard1/total-settlements/total-settlements.component';
import { AppYourPerformanceComponent } from 'src/app/components/dashboard1/your-performance/your-performance.component';
import { AppAnnualProfitComponent } from 'src/app/components/dashboard2/annual-profit/annual-profit.component';
import { AppRevenueForecastComponent } from 'src/app/components/dashboard2/revenue-forecast/revenue-forecast.component';
import { AppTopCardsComponent } from 'src/app/components/dashboard3/top-cards/top-cards.component';
import { AppFullcalendarComponent } from '../../apps/fullcalendar/fullcalendar.component';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [
    TablerIconsModule,
    AppRevenueForecastComponent,
    AppAnnualProfitComponent,
    AppYourPerformanceComponent,
    AppCustomersWeekComponent,
    AppSalesOverviewComponent,
    AppRevenueProductComponent,
    AppTotalSettlementsComponent,
    AppTopCardsComponent,
    AppFullcalendarComponent,
  ],
  templateUrl: './dashboard3.component.html',
})
export class AppDashboard3Component {
  constructor() {}
}
