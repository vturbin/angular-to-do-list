import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../to-do.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private todoService: ToDoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  dragStart(todo: Todo) {
    this.todoService.draggedProduct = todo;
  }

  onModify(todo: Todo) {
    this.router.navigate([`${todo.id}`], { relativeTo: this.route });
  }

  dragEnd() {
    this.todoService.draggedProduct = null;
  }
}
