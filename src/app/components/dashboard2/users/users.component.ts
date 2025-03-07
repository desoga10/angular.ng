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
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

export interface usersChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './users.component.html',
})
export class AppUsersComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public usersChart!: Partial<usersChart> | any;

  constructor() {
    this.usersChart = {
      series: [
        {
          name: '',
          color: '#16cdc7',
          data: [36, 45, 31, 47, 38, 43],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 100,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        colors: ['#16cdc7'],
        type: 'solid',
        opacity: 0.05,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };
  }
}
