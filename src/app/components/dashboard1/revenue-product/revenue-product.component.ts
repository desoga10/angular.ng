import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface month {
  value: string;
  viewValue: string;
}

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  hrate: number;
  skills: string;
  priority: string;
  progress: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/dash-prd-1.jpg',
    uname: 'Minecraf App',
    position: 'Jason Roy',
    skills: '3.5',
    hrate: 73.2,
    priority: 'Low',
    progress: 'success',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/dash-prd-2.jpg',
    uname: 'Web App Project',
    position: 'Mathew Flintoff',
    skills: '3.5',
    hrate: 73.2,
    priority: 'Medium',
    progress: 'warning',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/dash-prd-3.jpg',
    uname: 'Modernize Dashboard',
    position: 'Anil Kumar',
    skills: '3.5',
    hrate: 73.2,
    priority: 'Very High',
    progress: 'accent',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/dash-prd-4.jpg',
    uname: 'Dashboard Co',
    position: 'George Cruize',
    skills: '3.5',
    hrate: 73.2,
    priority: 'High',
    progress: 'error',
  },
];
@Component({
  selector: 'app-revenue-product',
  standalone: true,
  imports: [
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './revenue-product.component.html',
})
export class AppRevenueProductComponent {
  months: month[] = [
    { value: 'mar', viewValue: 'Sep 2024' },
    { value: 'apr', viewValue: 'Oct 2024' },
    { value: 'june', viewValue: 'Nov 2024' },
  ];

  displayedColumns: string[] = ['assigned', 'progress', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() {}
}
