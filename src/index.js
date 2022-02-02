import './styles.css';
import {Todo, TodoList} from './classes'; //--> buscará el index.js por defecto (index que contiene las clases ya importadas)
import {crearTodoHtml} from './js/componentes';

//Crea la instancia del arreglo
export const todoList = new TodoList();

todoList.todos.forEach( (todo) => crearTodoHtml( todo ));

todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);
