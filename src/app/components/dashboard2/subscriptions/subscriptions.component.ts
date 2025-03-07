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

export interface subscriptionChart {
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
  selector: 'app-subscriptions',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './subscriptions.component.html',
})
export class AppSubscriptionsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public subscriptionChart!: Partial<subscriptionChart> | any;

  constructor() {
    this.subscriptionChart = {
      series: [
        {
          name: 'Site A',
          data: [29, 52, 38, 47, 56, 41, 46],
        },
        {
          name: 'Site B',
          data: [71, 71, 71, 71, 71, 71, 71],
        },
      ],

      chart: {
        type: 'bar',
        height: 98,
        stacked: true,
        offsetX: -10,
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#ffffff', 'rgba(255,255,255,0.5)'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '26%',
          borderRadius: [3],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
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
