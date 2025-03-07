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

export interface projectsChart {
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
  selector: 'app-projects',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './projects.component.html',
})
export class AppProjectsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public projectsChart!: Partial<projectsChart> | any;

  constructor() {
    this.projectsChart = {
      series: [
        {
          name: '',
          labels: ['2012', '2013', '2014', '2015', '2016', '2017'],
          color: '#ffffff',
          data: [3, 5, 5, 7, 6, 5, 3, 5, 3],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 46,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      colors: ['#ffffff'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat',
          borderRadius: 4,
        },
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
