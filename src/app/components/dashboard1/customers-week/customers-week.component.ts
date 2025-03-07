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
import { TablerIconsModule } from 'angular-tabler-icons';

export interface customersweekChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
}

@Component({
  selector: 'app-customers-week',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule, TablerIconsModule],
  templateUrl: './customers-week.component.html',
})
export class AppCustomersWeekComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public customersweekChart!: Partial<customersweekChart> | any;

  constructor() {
    this.customersweekChart = {
      series: [
        {
          name: 'April 07 ',
          data: [0, 20, 15, 19, 14, 25, 30],
        },
        {
          name: 'Last Week',
          data: [0, 8, 19, 13, 26, 16, 25],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        height: 100,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      colors: ['rgb(99, 91, 255)', '#dddbff'],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.05,
          opacityTo: 0,
          stops: [20, 180],
        },
      },
      markers: {
        size: 0,
      },
      tooltip: {
        enabled: false,
      },
    };
  }
}
