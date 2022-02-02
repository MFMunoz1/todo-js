//Importaciones
import {Todo} from '../classes';
import {todoList} from '../index'; //se importa la constante que crea la instancia del arreglo


//Referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) =>{

    const htmlTodo = `
    <li class="${  (todo.completado) ? 'completed' : '' }" data-id="${  todo.id  }">
		<div class="view">
		    <input class="toggle" type="checkbox" ${  (todo.completado) ? 'checked' : '' }>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', (event)=>{
    
    //Evalua cuando el usuario presiona Enter y no sea un string vacío
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value)
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }
    

})

divTodoList.addEventListener('click', (event)=>{

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement; //Selecciona todo el bloque li de mi objeto tarea
    const todoId = todoElemento.getAttribute('data-id');

    console.log(todoElemento);
    console.log(todoId);


    if(nombreElemento.includes('input')){ //click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if (nombreElemento.includes('button')){ //hay que borrar el todo
        todoList.eliminarTodo(todoId); //filtra el id (que entra por parametro) de los demás elementos del arreglo
        divTodoList.removeChild(todoElemento); //elimina el bloque li de mi objeto en el html

    }
    
});

btnBorrar.addEventListener( 'click', ()=>{
    todoList.eliminarCompletados(); //me filtra aquellos elementos cuyo atributo de completado esté en true, quedando solamente los falses
    console.log(todoList);

    //Barre la lista del html a la inversa (de abajo hacia arriba), de manera que sus indices no se modifiquen como si se borraran de arriba hacia abajo
    for( let i = divTodoList.children.length - 1; i >= 0; i--){
        const elemento = divTodoList.children[i];
        
        
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});


ulFiltros.addEventListener( 'click', (event)=>{
    //
    const filtro = event.target.text;

    //si el filtro no contiene texto retorna
    if( !filtro ){
        return;
    }

    anchorFiltros.forEach( elementHtml =>{
        elementHtml.classList.remove('selected');
        event.target.classList.add('selected');
    });

    for( const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed'); //evalua si contiene la class ='completed'

        switch(filtro){
            case 'Pendientes':
                if(completado){ //muestra solo aquellos que NO estén !completed
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ){ //muestra solo aquellos que estén 'completed'
                    elemento.classList.add('hidden');
                }
            break;
        }
    }



});