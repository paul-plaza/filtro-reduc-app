import { Todo } from './todo/model/todo-model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from "./todo/todo.reducer";
import * as fromFiltro from "./filter/filter.reducer";
import * as fromFiltroActions from "./filter/filter.actions";

//Sirve para unificar todos los reducers de la aplicacion
export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}

//esta es para exportar en el modulo en una sola linea
export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}