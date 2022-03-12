

const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    
    if (action?.type === 'agregar'){ // el signo de interrogacion es simplemente para evitar un erro este quiere decir que si tiene algun valor o compare sino no haga nada
        return[...state,action.payload];
    }
    
    return state;
}

let todos = todoReducer();
  

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAction ={
    type: 'agregar', // le dira al reducer que tipo de accion usara , se le suele dar un nombre caracteristico de acuero a la funcion que realice 
    payload: newTodo // se puede mandar directamente el objeto pero se acostumbra usasr el payload 
}

todos = todoReducer(todos,agregarTodoAction);

console.log(todos);