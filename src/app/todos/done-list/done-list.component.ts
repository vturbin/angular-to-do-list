import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../to-do.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  doneList: Todo[];

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.doneList = this.toDoService.getDoneList();
    this.toDoService.trackDoneList.subscribe((doneList:Todo[])=>{
      this.doneList = doneList;
    })
  }

  drop() {
    if (this.toDoService.draggedProduct) {
      this.toDoService.moveTodo("doneList");
    }
  }

}
