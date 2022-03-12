import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


import './style.css'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {
    

    const [todos, dispatch] = useReducer(todoReducer, [], init);//en el dispatch se manda la accion

    useEffect(() => { //si los todos cambian debe guardar en el local storage eso hace este use effect , el local storage solo guarda string
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDeleteTodo = (todoId) => {


        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleTachado = (todoId) => {

        dispatch({                          //esto es lo mismo que el handle anterior solo que en lugar 
            type: 'tachado',                  //de esdribir la action y luego el dispatch hago la action dentro del                         
            payload: todoId                  //dispatch
        });
    }

    const handleAddtodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }



    return (

        <div>
            <h1>Tareas  ({todos.length}) </h1>
            <hr></hr>
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleTachado={handleTachado}
                    />
                </div>

                <div className='col-5 ' >

                    <TodoAdd
                        handleAddTodo={handleAddtodo}
                    />

                </div>
            </div>
        </div>
    )
}