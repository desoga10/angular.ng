import { Routes } from '@angular/router';

// components
import { AppAreaChartComponent } from './area/area.component';
import { AppCandlestickChartComponent } from './candlestick/candlestick.component';
import { AppColumnChartComponent } from './column/column.component';
import { AppDoughnutpieChartComponent } from './doughnut-pie/doughnut-pie.component';
import { AppGredientChartComponent } from './gredient/gredient.component';
import { AppLineChartComponent } from './line/line.component';
import { AppRadialRadarChartComponent } from './radial-radar/radial-radar.component';

export const ChartsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'area',
        component: AppAreaChartComponent,
        data: {
          title: 'Area Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Area Chart' },
          ],
        },
      },
      {
        path: 'candlestick',
        component: AppCandlestickChartComponent,
        data: {
          title: 'Candlestick',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Candlestick' },
          ],
        },
      },
      {
        path: 'column',
        component: AppColumnChartComponent,
        data: {
          title: 'Column Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Column Chart' },
          ],
        },
      },
      {
        path: 'doughnut-pie',
        component: AppDoughnutpieChartComponent,
        data: {
          title: 'Doughnut-Pie Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Doughnut-Pie Chart' },
          ],
        },
      },
      {
        path: 'gredient',
        component: AppGredientChartComponent,
        data: {
          title: 'Gredient Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Gredient Chart' },
          ],
        },
      },
      {
        path: 'line',
        component: AppLineChartComponent,
        data: {
          title: 'Line Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Line Chart' },
          ],
        },
      },
      {
        path: 'radial-radar',
        component: AppRadialRadarChartComponent,
        data: {
          title: 'Radial-Radar Chart',
          breadcrumb: true,
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Radial-Radar Chart' },
          ],
        },
      },
    ],
  },
];
