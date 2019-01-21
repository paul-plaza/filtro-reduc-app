import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo-model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  @ViewChild('txtInputRef') txtInputfisico: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      this.store.dispatch(new ToggleTodoAction(this.todo.id));
    });
  }
  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputfisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
  }

  borrarTodo() {
    this.store.dispatch(new BorrarTodoAction(this.todo.id));
  }
}
