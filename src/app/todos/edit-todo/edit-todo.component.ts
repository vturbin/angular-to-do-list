import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '../to-do.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  displayModal: boolean = false;
  todo: Todo;
  title: string;
  description: string;

    constructor(private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      const todo = this.todoService.getTodoById(id);
      if (todo) {
      this.displayModal=true;
      this.todo = todo;
      this.title = this.todo.title;
      this.description = this.todo.description;
      }
      else {
        this.router.navigate(['/todos']);
      }
    });
  }
  onUpdateTodo(): void {
    const modifiedTodo = {...this.todo}
    modifiedTodo.title = this.title;
    modifiedTodo.description = this.description;
    this.todoService.updateTodo(modifiedTodo)
    this.displayModal = false;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onDeleteTodo() : void {
    this.todoService.deleteTodo(this.todo);
    this.displayModal = false;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  navigateBack(): void {
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
