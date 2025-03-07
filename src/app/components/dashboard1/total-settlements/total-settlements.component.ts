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

export interface totalsettlementsChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
}

@Component({
  selector: 'app-total-settlements',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './total-settlements.component.html',
})
export class AppTotalSettlementsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public totalsettlementsChart!: Partial<totalsettlementsChart> | any;

  constructor() {
    this.totalsettlementsChart = {
      series: [
        {
          name: 'settlements',
          data: [
            40, 40, 80, 80, 30, 30, 10, 10, 30, 30, 100, 100, 20, 20, 140, 140,
          ],
        },
      ],
      labels: ['245', '45', '14', '78', '95'],
      chart: {
        type: 'line',
        height: 300,
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: { show: !1 },
      },
      legend: { show: !1 },
      dataLabels: { enabled: !1 },
      stroke: {
        curve: 'smooth',
        show: !0,
        width: 2,
        colors: ['rgba(99, 91, 255, 1)'],
      },
      xaxis: {
        categories: [
          '1W',
          '',
          '3W',
          '',
          '5W',
          '6W',
          '7W',
          '8W',
          '9W',
          '',
          '11W',
          '',
          '13W',
          '',
          '15W',
        ],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        tickAmount: 6,
        labels: {
          rotate: 0,
          rotateAlways: !0,
          style: { fontSize: '10px', colors: '#adb0bb', fontWeight: '600' },
        },
      },
      yaxis: {
        show: false,
        tickAmount: 3,
      },
      tooltip: {
        theme: 'dark',
      },
      colors: ['rgba(99, 91, 255, 1)'],
      grid: {
        borderColor: '#dddbff',
        strokeDashArray: 4,
        yaxis: { show: false },
      },
      markers: {
        strokeColor: ['rgba(99, 91, 255, 1)'],
        strokeWidth: 3,
      },
    };
  }
}
