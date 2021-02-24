import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './to-do.model';
import { ToDoService } from './to-do.service';

@Injectable({
  providedIn: 'root'
})
export class TodosResolverService {

  constructor(
    private todoService: ToDoService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Todo[] | Observable<Todo[]> | Promise<Todo[]> {
    const todos = this.todoService.getTodos();
    this.todoService.getDoneList();
    return todos;
  }
}
