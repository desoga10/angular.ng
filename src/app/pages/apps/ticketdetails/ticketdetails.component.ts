import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';


// tslint:disable-next-line - Disables all
export interface ticketstatus {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  stroke: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
}

@Component({
  templateUrl: './ticketdetails.component.html',
})
export class AppTicketdetailsComponent {

  form: UntypedFormGroup;

  htmlContent1 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  @ViewChild('ticket-chart') chart2: ChartComponent = Object.create(null);
  public ticketstatus: Partial<ticketstatus> | any;
  constructor(private formBuilder: UntypedFormBuilder) {
    this.ticketstatus = {
      series: [45, 15, 27, 18],
      chart: {
        type: 'donut',
        height: 200,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80px',
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: ['Open', 'Closed', 'Pending', 'Other'],
      colors: ['#1e88e5', '#26c6da', '#745af2', '#eceff1'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
    console.log(this.htmlContent1);
  }

  onChange(event: any) {
    console.log('changed');
  }

  onBlur(event: any) {
    console.log('blur ' + event);
  }
}
