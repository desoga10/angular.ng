import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog.component';
import { OkAppTaskComponent } from './ok-task/ok-task.component';
import { DeleteAppTaskComponent } from './delete-task/delete-task.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';

// tslint:disable-next-line - Disables all
interface todos {
  id: number;
  title: string;
  description: string;
  class?: string;
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule, TablerIconsModule, DragDropModule],
})
export class AppTaskboardComponent {
  todos: todos[] = [
    {
      id: 1,
      title: 'Launch new template',
      description: 'Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      id: 2,
      title: 'Book a Ticket',
      description: 'Blandit tempus porttitor aasfs.',
    },
    {
      id: 3,
      title: 'Task review',
      description:
        'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      class: 'task-status-info',
    },
  ];

  inprogress: todos[] = [
    {
      id: 201,
      title: 'Website Design',
      description: 'Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      id: 202,
      title: 'Angular 5 material',
      description:
        'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
      class: 'task-status-danger',
    },
    {
      id: 203,
      title: 'Horizontal Layoutbug',
      description: 'Lorem Ipsum, dapibus ac facilisis in',
      class: 'task-status-info',
    },
    {
      id: 204,
      title: 'Error --prod',
      description: 'Lorem Ipsum, dapibus ac facilisis.',
    },
    {
      id: 205,
      title: 'Update to angular5',
      description:
        'Dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
    },
    {
      id: 206,
      title: 'Give quatation',
      description:
        'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      class: 'task-status-warning',
    },
  ];

  completed: todos[] = [
    {
      id: 301,
      title: 'Design work',
      description:
        'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    },
    {
      id: 302,
      title: 'Meeting with team',
      description: 'Dapibus ac facilisis in, egestas eget quam.',
      class: 'task-status-success',
    },
    {
      id: 303,
      title: 'Material Pro angular',
      description: 'We have finished working on MaterialPro',
    },
    {
      id: 304,
      title: 'Admin wrap converted',
      description: 'We have finished working.',
    },
    {
      id: 305,
      title: 'Learning Angular 5',
      description: 'Task is now completed to learn angular5',
      class: 'task-status-success',
    },
  ];

  onhold: todos[] = [
    {
      id: 401,
      title: 'Ugrate to bootsrap 4 beta',
      description: 'Its panding in all template to update',
    },
    {
      id: 402,
      title: 'Required more plugins',
      description: 'Client require more plugins to add.',
    },
    {
      id: 403,
      title: 'Communication with client',
      description: 'They want to design like minimal way',
      class: 'task-status-danger',
    },
    {
      id: 404,
      title: 'Use gradiant or not',
      description: 'Need approval on whether use gradiant or make it plain',
    },
    {
      id: 405,
      title: 'Give review on the product',
      description: 'Commodo luctus, nisi erat porttitor lig.',
      class: 'task-status-danger',
    },
  ];

  constructor(public dialog: MatDialog) {}

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addTask(result.data);
      }
      if (result.event === 'Edit') {
        this.editTask(result.data);
      }
    });
  }

  addTask(row_obj: any): void {
    this.todos.push({
      id: this.todos.length + 1,
      title: row_obj.title,
      description: row_obj.description,
    });
    this.dialog.open(OkAppTaskComponent);
  }

  editTask(row_obj: any): void {
    this.todos = this.todos.filter((value: todos) => {
      if (value.id === row_obj.id) {
        value.title = row_obj.title;
        value.description = row_obj.description;
      }
      return true;
    });

    this.inprogress = this.inprogress.filter((value: todos) => {
      if (value.id === row_obj.id) {
        value.title = row_obj.title;
        value.description = row_obj.description;
      }
      return true;
    });
    this.onhold = this.onhold.filter((value: todos) => {
      if (value.id === row_obj.id) {
        value.title = row_obj.title;
        value.description = row_obj.description;
      }
      return true;
    });

    this.completed = this.completed.filter((value: todos) => {
      if (value.id === row_obj.id) {
        value.title = row_obj.title;
        value.description = row_obj.description;
      }
      return true;
    });
  }

  deleteTask(t: todos) {
    const del = this.dialog.open(DeleteAppTaskComponent);

    del.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.todos = this.todos.filter((task) => task.id !== t.id);
        this.inprogress = this.inprogress.filter((task) => task.id !== t.id);
        this.onhold = this.onhold.filter((task) => task.id !== t.id);
        this.completed = this.completed.filter((task) => task.id !== t.id);
      }
    });
  }
}
