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

export interface yourperformanceChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
}

interface performanceLists {
  id: number;
  color: string;
  icon: string;
  title: string;
  subtext: string;
}

@Component({
  selector: 'app-your-performance',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './your-performance.component.html',
})
export class AppYourPerformanceComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public yourperformanceChart!: Partial<yourperformanceChart> | any;

  constructor() {
    this.yourperformanceChart = {
      series: [20, 20, 20, 20, 20],
      labels: ['245', '45', '14', '78', '95'],
      chart: {
        type: 'donut',
        height: 205,
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
          donut: {
            size: '90%',
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
        name: {
          show: false,
        },
      },
      stroke: {
        width: 2,
        colors: 'var(--mdc-elevated-card-container-color)',
      },
      tooltip: {
        fillSeriesColor: false,
      },
      colors: ['rgba(255, 102, 146, 1)', '#f8c20a', '#fff9e5', '#a6f7f5', '#16cdc7'],
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: 150,
            },
          },
        },
      ],
    };
  }

  performanceLists: performanceLists[] = [
    {
      id: 1,
      color: 'primary',
      icon: 'solar:shop-2-linear',
      title: '64 new orders',
      subtext: 'Processing',
    },
    {
      id: 2,
      color: 'error',
      icon: 'solar:filters-outline',
      title: '4 orders',
      subtext: 'On hold',
    },
    {
      id: 3,
      color: 'accent',
      icon: 'solar:pills-3-linear',
      title: '12 orders',
      subtext: 'Delivered',
    },
  ];
}
