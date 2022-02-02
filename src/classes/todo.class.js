

export class Todo{

    //Convierte a instancia el objeto obtenido del localStorage
    static fromJson({id, tarea, completado, creado}){ //desestructuracion de código, donde a mi objeto le extraigo propiedades
        //tempoTodo = todo temporal

        const tempTodo = new Todo( tarea ) //de mi objeto, obtengo el nombre de la tarea
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    //Recibe una tarea. Ej: Aprender js, Comprar leche
    constructor(tarea) {
        this.tarea= tarea;
        //Al momento de crear la tarea, me crea automaticamente todos los atributos siguientes
        this.id = new Date().getTime(); // trae el tiempo actual en milisegundos: 123712381
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}