import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from './to-do.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  modifyTodo = new EventEmitter<Todo>();
  trackTodos = new EventEmitter<Todo[]>();
  trackDoneList = new EventEmitter<Todo[]>();
  draggedProduct = null;

  private todos: Todo[] = [
    {
      id: 'ipnosibxq',
      title: 'Do sports',
      description: 'Wake up at 6am and go jogging',
      dateCreated: new Date().toDateString(),
    },
  ];

  private doneList: Todo[] = [];

  getTodos() {
    console.log(this.todos);
    return this.todos;
  }

  getTodoById(id: string): Todo | undefined {
    const allTodos: Todo[] = [...this.todos,...this.doneList]
    return allTodos.find(todo=>todo.id===id);
  }

  getDoneList() {
    return this.doneList;
  }

  createToDo(todo: Todo) {
    todo.id = '' + Math.random().toString(36).substr(2, 9);
    this.todos.push(todo);
    this.trackTodos.emit(this.todos);
    console.log(this.todos)
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((deleteTodo) => deleteTodo.id !== todo.id);
    this.doneList = this.doneList.filter((deleteTodo=> deleteTodo.id !== todo.id))
    this.trackTodos.emit(this.todos);
    this.trackDoneList.emit(this.doneList);
  }

  updateTodo(todo: Todo) {
    const indexTodoList = this.todos.findIndex((findTodo) => findTodo.id === todo.id);
    if (indexTodoList != -1) {
      this.todos[indexTodoList] = todo;
      this.trackTodos.emit(this.todos);
    }
    else {
      const indexDoneList = this.doneList.findIndex((findTodo) => findTodo.id === todo.id);
      this.doneList[indexDoneList] = todo;
      this.trackDoneList.emit(this.doneList);
    }
  }

  moveTodo(toList: 'todoList' | 'doneList') {
    const indexTodoList = this.todos.findIndex(
      (findTodo) => findTodo.id === this.draggedProduct.id
    );
    const indexDoneList = this.doneList.findIndex(
      (findTodo) => findTodo.id === this.draggedProduct.id
    );
    if (
      (toList === 'todoList' && indexTodoList != -1) ||
      (toList === 'doneList' && indexDoneList != -1)
    ) {
      return
    } else if (toList === 'todoList') {
      this.todos = [...this.todos, this.doneList[indexDoneList]]
      this.doneList.splice(indexDoneList,1)
    } else if (toList === 'doneList') {
      this.doneList = [...this.doneList, this.todos[indexTodoList]]
      this.todos.splice(indexTodoList,1)
    }
    this.trackTodos.emit(this.todos);
    this.trackDoneList.emit(this.doneList);
  }

  constructor() {}
}
