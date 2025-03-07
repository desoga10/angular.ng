import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export interface salesoverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
}

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './sales-overview.component.html',
})
export class AppSalesOverviewComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public salesoverviewChart!: Partial<salesoverviewChart> | any;

  constructor() {
    this.salesoverviewChart = {
      series: [50, 80, 30],

      chart: {
        type: 'radialBar',
        height: 230,
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
      },
      plotOptions: {
        radialBar: {
          inverseOrder: false,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 1,
            size: '40%',
          },
          dataLabels: {
            show: false,
          },
        },
      },
      legend: {
        show: false,
      },
      stroke: { width: 1, lineCap: 'round' },
      tooltip: {
        enabled: false,
        fillSeriesColor: false,
      },
      colors: ['rgba(99, 91, 255, 1)', '#16cdc7', 'rgba(255, 102, 146, 1)'],
    };
  }
}
