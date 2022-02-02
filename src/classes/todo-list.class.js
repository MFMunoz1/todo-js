import { Todo } from "./todo.class";


//Clase que contiene la lista de tareas
export class TodoList{

    constructor(){
        //Arreglo de tareas
        // this.todos = [];
        this.cargarLocalStorage(); //Se llama a la función cuando this.todos no contiene elementos, entonces creará el arreglo vacío --> corresponde al else del metodo
    }

    //Metodo que inserta una nueva tarea en el arreglo
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    //Metodo que elimina una tarea
    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    //Marcar/tachar tarea
    marcarCompletado( id ){
        
        for( const todo of this.todos){
            console.log(todo.id, id);
            
            if(todo.id == id){
                todo.completado = !todo.completado; //devuelve un true
                this.guardarLocalStorage();
                break;
            }
        }
    }

    //Eliminar tareas completados => Barrerá todo el arreglo y eliminará sólo aquellas tareas que estén en true (realizadas)
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado); // !todo.completado devuelve un true
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos )); //convierte los objetos del arreglo a string (json)
        //console.log(typeof JSON.stringify( this.todos )); -->this.todos ahora es un arreglo de strings

    }

    cargarLocalStorage(){
        // if( localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo')); //convierte de string (json) a arreglo de objetos nuevamente
        //     console.log('Cargar local: ', this.todos);
        //     //console.log(typeof this.todos);
        // }else {
        //     this.todos = [];
        // }

        this.todos= ( localStorage.getItem('todo') )
                        ? JSON.parse(localStorage.getItem('todo')) //convierte nuevamente los elementos del array (strings) a objetos 
                        : []; //Si array contiene elementos: Obtiene todos los elementos
                             //Si array no contiene elementos: Creará el atributo this.todos y lo inicializará como array vacío
    
        // console.log( typeof JSON.parse(localStorage.getItem('todo')) );

        //Reescribe cada objeto del arreglo y los convierte en un arreglo de instancias
        this.todos = this.todos.map( (obj)=> Todo.fromJson( obj ));

    }


}