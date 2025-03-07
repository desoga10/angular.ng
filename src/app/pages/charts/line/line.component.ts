import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from '../../../material.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};
@Component({
  selector: 'app-line',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule],
  templateUrl: './line.component.html',
})
export class AppLineChartComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public lineChartOptions: Partial<ChartOptions> | any;

  constructor() {
    // Line chart.
    this.lineChartOptions = {
      series: [
        {
          name: 'Site A',
          data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
        },
        {
          name: 'Site B',
          data: [1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3],
        },
      ],
      chart: {
        height: 300,
        type: 'line',
        fontFamily: 'DM Sans,sans-serif',
        foreColor: '#a1aab2',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 3,
        strokeColors: 'transparent',
      },
      stroke: {
        curve: 'straight',
        width: '2',
      },
      colors: ['#635bff', '#16cdc7'],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
      },
      xaxis: {
        type: 'category',
        categories: [
          '0',
          '2',
          '4',
          '6',
          '8',
          '10',
          '12',
          '14',
          '16',
          '18',
          '20',
          '22',
          '24',
          '26',
          '28',
          '30',
          '32',
        ],
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
