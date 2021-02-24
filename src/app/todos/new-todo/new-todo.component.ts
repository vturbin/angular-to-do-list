import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Todo } from '../to-do.model';

@Component({
  selector: 'new-todo-modal',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  @Input() displayModal: Event | boolean;
  title: string = '';
  description: string = '';

  constructor(private todoService: ToDoService) {}

  ngOnInit(): void {}

  onCreateTodo() {
    const newTodo: Todo = {
      title: this.title,
      description: this.description,
      dateCreated: new Date().toDateString(),
    };
    this.displayModal = false;

    this.todoService.createToDo(newTodo);
    this.title = "";
    this.description = "";
  }

  clearInputs() {
    this.title = "";
    this.description = "";
  }
}
