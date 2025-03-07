import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from '../../../material.module';

export interface yearlysaleChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-weekly-stats',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule],
  templateUrl: './weekly-stats.component.html',
})
export class AppWeeklyStatsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public yearlysaleChart!: Partial<yearlysaleChart> | any;

  constructor() {
    this.yearlysaleChart = {
      series: [
        {
          name: '',
          data: [20, 15, 18, 25, 10, 15, 20],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        
        height: 220,
      },
      colors: [
        '#f2f6fa',
        '#f2f6fa',
        'rgba(99, 91, 255, 1)',
        '#f2f6fa',
        '#f2f6fa',
        '#f2f6fa',
      ],
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '65%',
          distributed: true,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: [
          ['Apr'],
          ['May'],
          ['June'],
          ['July'],
          ['Aug'],
          ['Sept'],
          ['Oct'],
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
