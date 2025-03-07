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
import * as moment from 'moment';

export interface weeklyChart {
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
  selector: 'app-weekly-schedules',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './weekly-schedules.component.html',
})
export class AppWeeklyScheduleComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public weeklyChart!: Partial<weeklyChart> | any;

  constructor() {
    this.weeklyChart = {
      series: [
        {
          data: [
            {
              x: 'Sun',
              y: [
                new Date('2024-02-27').getTime(),
                new Date('2024-03-04').getTime(),
              ],
              fillColor: 'rgba(99, 91, 255, 1)',
            },
            {
              x: 'Mon',
              y: [
                new Date('2024-03-04').getTime(),
                new Date('2024-03-10').getTime(),
              ],
              fillColor: '#526b7a',
            },
            {
              x: 'Tue',
              y: [
                new Date('2024-03-01').getTime(),
                new Date('2024-03-06').getTime(),
              ],
              fillColor: 'rgba(255, 102, 146, 1)',
            },
          ],
        },
      ],

      chart: {
        type: 'rangeBar',
        height: 300,
        group: 'sparklines',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
          dataLabels: {
            hideOverflowingLabels: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        background: {
          borderRadius: 20,
        },
        formatter: function (
          val: any[],
          opts: {
            w: { globals: { labels: { [x: string]: any } } };
            dataPointIndex: string | number;
          }
        ) {
          var label = opts.w.globals.labels[opts.dataPointIndex];
          var a = moment(val[0]);
          var b = moment(val[1]);

          return label + ': ' + 'Meeting with Sunil';
        },
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: { fontSize: '13px', colors: '#adb0bb', fontWeight: '400' },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: { fontSize: '13px', colors: '#adb0bb', fontWeight: '400' },
        },
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.05)',
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
