import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataFormComponent } from './my-data-form/my-data-form.component';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { TodosResolverService } from './todos/todos-resolver.service';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'my-data', component: MyDataFormComponent },
  {
    path: 'todos',
    component: TodosComponent,
    children: [
      {
        path: ':id',
        component: EditTodoComponent,
        resolve: [TodosResolverService],
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
