import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './todos/to-do-list/to-do-list.component';
import { DoneListComponent } from './todos/done-list/done-list.component';
import { ToDoItemComponent } from './todos/to-do-item/to-do-item.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {DragDropModule} from 'primeng/dragdrop';
import { NewTodoComponent } from './todos/new-todo/new-todo.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { EditTodoComponent } from './todos/edit-todo/edit-todo.component';
import { MyDataFormComponent } from './my-data-form/my-data-form.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DoneListComponent,
    ToDoItemComponent,
    AppHeaderComponent,
    NewTodoComponent,
    EditTodoComponent,
    MyDataFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabMenuModule,
    DragDropModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }