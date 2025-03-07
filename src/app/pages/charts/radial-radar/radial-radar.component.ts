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
  selector: 'app-radial-radar',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule],
  templateUrl: './radial-radar.component.html',
})
export class AppRadialRadarChartComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public radialbarChartOptions: Partial<ChartOptions> | any;
  public radarChartOptions: Partial<ChartOptions> | any;

  constructor() {
    //radialbar chart.
    this.radialbarChartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        id: 'radial-chart',
        type: 'radialBar',
        height: 350,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
      },
      colors: ['#635bff', '#16cdc7', '#f8c20a', '#36c76c'],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter() {
                return 249;
              },
            },
          },
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };

    //radialbar chart.
    this.radarChartOptions = {
      series: [
        {
          name: 'Sales',
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      chart: {
        id: 'pie-chart',
        type: 'radar',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        toolbar: {
          show: false,
        },
      },
      colors: ['#5D87FF'],
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
