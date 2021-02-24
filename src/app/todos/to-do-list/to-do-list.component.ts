import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Todo } from '../to-do.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[]
  @Output() eventClicked = new EventEmitter<Event>();

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.todos = this.toDoService.getTodos();
    this.toDoService.trackTodos.subscribe((todos:Todo[])=>{
      this.todos = todos;
    })
  }

  onCreateToDo(event: Event):void {
    this.eventClicked.emit(event);
  }

  drop() {
    if (this.toDoService.draggedProduct) {
      this.toDoService.moveTodo("todoList");
    }
  }

}
