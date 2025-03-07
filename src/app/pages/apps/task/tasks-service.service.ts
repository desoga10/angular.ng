import { Injectable } from '@angular/core';
import { sectionWiseTask } from './tasks-data';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public sidebarShow = false;

  constructor() {}

  public getSectionWiseTask(): any {
    return sectionWiseTask;
  }
}
