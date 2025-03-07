import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TablerIconsModule } from 'angular-tabler-icons';
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

interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    MatCardModule,
    NgApexchartsModule,
    TablerIconsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './charts.component.html',
})
export class AppChartsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);

  public followersChart: Partial<ChartOptions> | any;
  public viewsChart: Partial<ChartOptions> | any;
  public earnChart: Partial<ChartOptions> | any;
  public totalearnChart: Partial<ChartOptions> | any;
  public incomeChart: Partial<ChartOptions> | any;
  public expancechart: Partial<ChartOptions> | any;
  public currentyearChart: Partial<ChartOptions> | any;
  public yearlyBreakupChart: Partial<ChartOptions> | any;
  public monthlytwoChart: Partial<ChartOptions> | any;
  public yearlysaleChart: Partial<ChartOptions> | any;
  public projectsChart: Partial<ChartOptions> | any;
  public customerChart: Partial<ChartOptions> | any;
  public revenuetwoChart: Partial<ChartOptions> | any;
  public salesoverviewChart: Partial<ChartOptions> | any;
  public mostvisitChart: Partial<ChartOptions> | any;
  public pageimpChart: Partial<ChartOptions> | any;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];

  constructor() {
    // followers chart
    this.followersChart = {
      series: [
        {
          name: '',
          data: [0, 150, 110, 240, 200, 200, 300, 200],
        },
      ],
      chart: {
        type: 'area',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 90,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['rgb(99, 91, 255)'],
      stroke: {
        curve: 'straight',
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };

    // views chart
    this.viewsChart = {
      series: [
        {
          name: '',
          data: [20, 15, 30, 25, 10, 18, 20],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 70,
        sparkline: {
          enabled: true,
        },
      },
      colors: [
        '#E8F7FF',
        '#E8F7FF',
        '#16cdc7',
        '#E8F7FF',
        '#E8F7FF',
        '#E8F7FF',
        '#E8F7FF',
        '#E8F7FF',
      ],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '50%',
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
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        labels: {
          show: false,
        },
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

    // earn chart
    this.earnChart = {
      series: [
        {
          name: '',
          data: [0, 3, 1, 2, 8, 1, 5, 1],
        },
      ],
      chart: {
        type: 'area',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 90,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['rgb(99, 91, 255)'],
      stroke: {
        curve: 'straight',
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };

    // total earnings chart
    this.totalearnChart = {
      series: [
        {
          name: '',
          data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 65,
        resize: true,
        barColor: '#fff',
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#16cdc7'],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          startingShape: 'flat',
          endingShape: 'flat',
          columnWidth: '60%',
          barHeight: '20%',
          borderRadius: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2.5,
        colors: ['rgba(0,0,0,0.01)'],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };

    // income chart
    this.incomeChart = {
      series: [
        {
          name: '',
          data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
        },
        {
          name: '',
          data: [-2.8, -1.1, -3.0, -1.5, -1.9, -2.8],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 200,
        stacked: true,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['rgba(99, 91, 255, 1)', 'rgba(99, 91, 255, 1)'],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '60%',
          columnWidth: '20%',
          borderRadius: [6],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        tickAmount: 4,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };

    // expance chart
    this.expancechart = {
      series: [
        {
          name: '',
          data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
        },
        {
          name: '',
          data: [-2.8, -1.1, -3.0, -1.5, -1.9, -2.8],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 200,
        stacked: true,
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#16cdc7', '#16cdc7'],
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '60%',
          columnWidth: '20%',
          borderRadius: [6],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        tickAmount: 4,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };

    // current year chart
    this.currentyearChart = {
      series: [55, 55, 55],
      chart: {
        type: 'donut',
        fontFamily: 'inherit',

        toolbar: {
          show: false,
        },
        height: 220,
      },
      labels: ['Income', 'Current', 'Expance'],
      colors: ['rgba(99, 91, 255, 1)', '#ECF2FF', '#16cdc7'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '89%',
            background: 'transparent',

            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                color: '#2A3547',
                fontSize: '20px',
                fontWeight: '600',
                label: '$98,260',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
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

    // yearly breakup
    this.yearlyBreakupChart = {
      series: [38, 40, 25],

      chart: {
        type: 'donut',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 130,
      },
      colors: ['rgba(99, 91, 255, 1)', '#ECF2FF', '#F9F9FD'],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
            background: 'transparent',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 120,
            },
          },
        },
      ],
      tooltip: {
        enabled: false,
      },
    };

    // monthly chart
    this.monthlytwoChart = {
      series: [
        {
          name: '',
          color: 'rgb(99, 91, 255)',
          data: [25, 66, 20, 40, 12, 58, 20],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 60,
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
        colors: ['#E8F7FF'],
        type: 'solid',
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

    // yearlysale chart
    this.yearlysaleChart = {
      series: [
        {
          name: '',
          data: [20, 15, 30, 25, 10, 15],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 290,
      },
      colors: [
        '#ECF2FF',
        '#ECF2FF',
        'rgba(99, 91, 255, 1)',
        '#ECF2FF',
        '#ECF2FF',
        '#ECF2FF',
      ],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '45%',
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
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: [['Apr'], ['May'], ['June'], ['July'], ['Aug'], ['Sept']],
        axisBorder: {
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

    // projcts chart
    this.projectsChart = {
      series: [
        {
          name: '',
          data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 75,
        resize: true,
        barColor: '#fff',
        sparkline: {
          enabled: true,
        },
      },
      colors: ['rgba(99, 91, 255, 1)'],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          startingShape: 'flat',
          endingShape: 'flat',
          columnWidth: '60%',
          barHeight: '20%',
          borderRadius: 3,
        },
      },
      stroke: {
        show: true,
        width: 2.5,
        colors: ['rgba(0,0,0,0.01)'],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };

    // customers chart
    this.customerChart = {
      series: [
        {
          name: '',
          color: '#16cdc7',
          data: [30, 25, 35, 20, 30, 40],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 80,
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
        colors: ['#E8F7FF'],
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

    // revenue charts
    this.revenuetwoChart = {
      series: [
        {
          name: 'Footware',
          data: [2.5, 3.7, 3.2, 2.6, 1.9],
          color: 'rgba(99, 91, 255, 1)',
        },
        {
          name: 'Fashionware',
          data: [-2.8, -1.1, -3.0, -1.5, -1.9],
          color: '#16cdc7',
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 330,
        offsetX: -20,
        stacked: true,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: [6],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },

      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      yaxis: {
        min: -5,
        max: 5,
        tickAmount: 4,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };

    // sales overview chart
    this.salesoverviewChart = {
      series: [55, 55, 55],

      chart: {
        type: 'donut',
        fontFamily: 'inherit',

        toolbar: {
          show: false,
        },
        height: 250,
      },
      labels: ['Profit', 'Revenue', 'Expance'],
      colors: ['rgba(99, 91, 255, 1)', '#ECF2FF', '#16cdc7'],
      plotOptions: {
        pie: {
          donut: {
            size: '89%',
            background: 'transparent',

            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: true,
                color: '#2A3547',
                fontSize: '20px',
                fontWeight: '600',
                label: '$500,458',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };

    // most visit chart
    this.mostvisitChart = {
      series: [
        {
          name: 'San Francisco',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Diego',
          data: [13, 23, 20, 8, 13, 27],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 280,
        stacked: true,
      },
      colors: ['rgba(99, 91, 255, 1)', '#16cdc7'],
      plotOptions: {
        bar: {
          borderRadius: [6],
          horizontal: false,
          barHeight: '60%',
          columnWidth: '30%',
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      yaxis: {
        tickAmount: 4,
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06'],
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };

    // page impressions
    this.pageimpChart = {
      series: [
        {
          name: '',
          data: [20, 15, 30, 25, 10],
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 100,
        resize: true,
        barColor: '#fff',
        sparkline: {
          enabled: true,
        },
      },
      colors: [
        '#E8F7FF',
        '#E8F7FF',
        '#16cdc7',
        '#E8F7FF',
        '#E8F7FF',
        '#E8F7FF',
      ],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '50%',
          distributed: true,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2.5,
        colors: ['rgba(0,0,0,0.01)'],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1,
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
