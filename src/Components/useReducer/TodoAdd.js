import React from 'react';
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {



    const [{ description }, handleInputChange, reset] = useForm({ //desetructuramos el objeto que mandamos a use form y que este nos retorna y solo tomamos la description del mismo
        description: '' /* //este deb ser el mismo que el description de mas abajo */
    });

    const handleSubmit = (e) => {
        e.preventDefault();// evita el refresh del formulario

        if (description.trim().length <= 1) { // sirve para que no agregue tareas vacias al tocar agregar en los TODOs
            return;
        }
        const newTodo = {
            id: new Date().getTime(),//solo para asegurarnos que el id sea unico
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <div>
            <h4>Agregar TODO</h4>
            <hr></hr>
            <form onSubmit={handleSubmit}>

                <input

                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 d-grid gap-2 col-12 mx-auto'
                >
                    Agregar
                </button>

            </form>
        </div>
    )
}