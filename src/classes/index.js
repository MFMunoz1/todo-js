
//ARCHIVO JS QUE AGRUPA TODOS LAS CLASES QUE SERÁN IMPORTADAS, DE MANERA DE REALIZAR SOLO 1 LINEA DE IMPORTACIÓN EN EL ARCHIVO DONDE SERÁ OCUPADA LA CLASE
// Y NO 7 IMPORTACIONES POR EJ, SINO QUE SOLAMENTE 1 LINEA DE IMPORTACIÓN

import {Todo} from './todo.class.js';
import {TodoList} from './todo-list.class.js';

export{
    Todo,
    TodoList
}