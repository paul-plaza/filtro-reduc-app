import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo-model';
import * as fromFiltro from './filter.actions'
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {
    console.info(filtro);
    switch (filtro) {
      case "completados":
        return todos.filter(todo => todo.completado);
      case "pendientes":
        return todos.filter(todo => !todo.completado);
      case "todos":
        return todos;
    }
  }

}
