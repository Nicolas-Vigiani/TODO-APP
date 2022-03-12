

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'tachado':
            return state.map(todo =>                            // esto es la version mejorada del case de abajo desde la linea 20-34
                (todo.id === action.payload)
                    ?{...todo,done: !todo.done}
                    : todo
            );


        case 'tachado-viejo':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })

        default:
            return state;
    }
} 