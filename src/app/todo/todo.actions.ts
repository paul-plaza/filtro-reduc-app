import { Action } from '@ngrx/store'
export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const TOOGLE_ALL_TODO = '[TODO] Toggle all todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar all todo';

//Acciones
export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) { }
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOOGLE_ALL_TODO;
    constructor(public toggle: boolean) { }
}

export class BorrarAllToDoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}


//Lista acciones
export type Acciones = AgregarTodoAction |
                       ToggleTodoAction | 
                       EditarTodoAction | 
                       BorrarTodoAction | 
                       BorrarAllToDoAction |
                       ToggleAllTodoAction;