import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

// table 1
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low'
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium'
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high'
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical'
  },
];

// table 2

export interface performanceData {
  id: number;
  imagePath: string;
  pname: string;
  category: string;
  progress: number;
  sales: number;
  status: string;
}

const PROJECT_DATA: performanceData[] = [
  {
    id: 1,
    imagePath: 'assets/images/products/s6.jpg',
    pname: 'Gaming Console',
    category: 'Electronics',
    progress: 78.5,
    sales: 3.9,
    status: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/products/s9.jpg',
    pname: 'Leather Purse',
    category: 'Fashion',
    progress: 58.6,
    sales: 3.5,
    status: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/products/s7.jpg',
    pname: 'Red Velvate Dress',
    category: 'Womens Fashion',
    progress: 25,
    sales: 3.8,
    status: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/products/s4.jpg',
    pname: 'Headphone Boat',
    category: 'Electronics',
    progress: 96.3,
    sales: 3.54,
    status: 'critical',
  },
];

// table 3

export interface paymentData {
  id: number;
  color: string;
  imagePath: string;
  pname: string;
  category: string;
  price: number;
}

const PAYMENT_DATA: paymentData[] = [
  {
    id: 1,
    color: 'primary',
    imagePath: 'assets/images/svgs/icon-paypal.svg',
    pname: 'Paypal',
    category: 'Big Brands',
    price: 6235,
  },
  {
    id: 2,
    color: 'success',
    imagePath: 'assets/images/svgs/icon-office-bag.svg',
    pname: 'Wallet',
    category: 'Bill payment',
    price: 345,
  },
  {
    id: 3,
    color: 'warning',
    imagePath: 'assets/images/svgs/icon-master-card.svg',
    pname: 'Credit Card',
    category: 'Money reversed',
    price: 2235,
  },
  {
    id: 4,
    color: 'error',
    imagePath: 'assets/images/svgs/icon-pie.svg',
    pname: 'Refund',
    category: 'Bill Payment',
    price: 32,
  },
];

export interface Element {
  name: string;
  post: string;
  imgSrc: string;
  pname: string;
  status: string;
  color: string;
  budget: string;
}

const BASIC_DATA: Element[] = [
  { 
    imgSrc: 'assets/images/profile/user-1.jpg',
    name: 'Micheal Doe',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Active',
    color: 'success',
    budget: '3.9'
   },
   { 
    imgSrc: 'assets/images/profile/user-2.jpg',
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Pending',
    color: 'warning',
    budget: '3.9'
   },
   { 
    imgSrc: 'assets/images/profile/user-3.jpg',
    name: 'Christopher Jamil',
    post: 'Frontend Engineer',
    pname: 'MedicalPro WP Theme',
    status: 'Cancel',
    color: 'error',
    budget: '3.9'
   },
   { 
    imgSrc: 'assets/images/profile/user-4.jpg',
    name: 'Mathew Anderson',
    post: 'Content Writer',
    pname: 'Hosting Press HTML',
    status: 'Completed',
    color: 'primary',
    budget: '3.9'
   },
];


@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports:[MatTableModule, CommonModule, MatCardModule],
  templateUrl: './basic-table.component.html',
})
export class AppBasicTableComponent implements OnInit {

  // table 4
  
  displayedColumns4 = ['name', 'pname', 'status', 'budget'];
  dataSource4 = new MatTableDataSource<Element>(BASIC_DATA);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns4 = result.matches
        ? ['name', 'pname', 'status', 'budget']
        : ['name', 'pname', 'status', 'budget'];
    });
  }

  // table 1
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;

  // table 2
  displayedColumns2: string[] = ['product', 'progress', 'status', 'sales'];
  dataSource2 = PROJECT_DATA;

  // table 3
  displayedColumns3: string[] = ['product', 'price'];
  dataSource3 = PAYMENT_DATA;

  ngOnInit(): void {}
}


