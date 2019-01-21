import { Action } from '@ngrx/store';



export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const SET_FILTRO = '[Filter] Set Filtro';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;
    constructor(public filtro: filtrosValidos) { }
}

export type acciones = SetFiltroAction;