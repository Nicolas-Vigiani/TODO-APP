import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDeleteTodo, handleTachado }) => {
    return (

        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                 <TodoListItem
                 key = {todo.id} // debe tener siempre un key identificador , sino salta el error key prop
                 todo = {todo}
                 index = {i}
                 handleDeleteTodo = {handleDeleteTodo}
                 handleTachado = {handleTachado}
                 />
                ))
            }
        </ul>
    )
}