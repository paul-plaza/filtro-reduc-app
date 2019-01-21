import * as fromTodo from './todo.actions'
import { Todo } from './model/todo-model';

const todo1 = new Todo('Vencer thanos');
const todo2 = new Todo('Salavar el mundo');
const todo3 = new Todo('Prueba 3');
todo1.completado = true;

//Este es el estado inicial
const estadoInicial: Todo[] = [todo1, todo2, todo3];

//inyectamos el estado y la accion
export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);

            //clona el estado actual
            return [...state, todo];
        case fromTodo.TOGGLE_TODO:
            //siempre devolver un nuevo estado nunca mutar el estado anterior
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit, completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.EDITAR_TODO:
            //siempre devolver un nuevo estado nunca mutar el estado anterior
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit, texto: action.texto
                    }
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.TOOGLE_ALL_TODO:
            //siempre devolver un nuevo estado nunca mutar el estado anterior
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.toggle
                }
            });
        case fromTodo.BORRAR_TODO:
            //siempre devolver un nuevo estado nunca mutar el estado anterior
            return state.filter(aux => aux.id != action.id);
        case fromTodo.BORRAR_ALL_TODO:
            //siempre devolver un nuevo estado nunca mutar el estado anterior
            return state.filter(aux => !aux.completado);
        default: return state;
    }
}