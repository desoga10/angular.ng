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
  ApexFill,
} from 'ng-apexcharts';

export interface totalincomeChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  fill: ApexFill;
}

@Component({
  selector: 'app-total-income',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './total-income.component.html',
})
export class AppTotalIncomeComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public totalincomeChart!: Partial<totalincomeChart> | any;

  constructor() {
    this.totalincomeChart = {
      series: [
        {
          name: 'Income',
          color: 'rgba(255, 102, 146, 1)',
          data: [30, 25, 35, 20, 30, 40],
        },
      ],

      chart: {
        type: 'line',
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
      },
    };
  }
}
