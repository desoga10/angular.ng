import { Injectable } from '@angular/core';
import { ToDo } from './todo';
import { todos } from './todo-data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: ToDo[] = todos;

  public getTodos(): ToDo[] {
    return this.todos;
  }
}
