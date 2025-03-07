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

export interface annualprofitChart {
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
  selector: 'app-annual-profit',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './annual-profit.component.html',
})
export class AppAnnualProfitComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public annualprofitChart!: Partial<annualprofitChart> | any;

  constructor() {
    this.annualprofitChart = {
      series: [
        {
          name: 'Users',
          color: 'rgb(99, 91, 255)',
          data: [25, 66, 20, 40, 12, 58, 20],
        },
      ],

      chart: {
        type: 'area',
        height: 80,
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
        x: {
          show: false,
        },
      },
    };
  }
}
