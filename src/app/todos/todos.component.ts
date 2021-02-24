import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public newTodo: Event;
  
  constructor() {}

  ngOnInit(): void {}

  onNewTodo(event: Event) {
    this.newTodo = event;
  }
}
