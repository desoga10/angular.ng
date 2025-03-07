import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-row-context-table',
  standalone: true,
  imports: [MatCardModule, MatTableModule],
  templateUrl: './row-context-table.component.html',
})
export class AppRowContextTableComponent implements OnInit {
  displayedColumns: string[] = [
    '$implicit',
    'index',
    'count',
    'first',
    'last',
    'even',
    'odd',
  ];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];

  constructor() {}

  ngOnInit(): void {}
}
