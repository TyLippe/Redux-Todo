export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_COMPLETE = "DELETE_COMPLETE";

const initialState = {
    todos: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            };

        case DELETE:
            const filteredToDo = state.todos
                .slice(0, action.payload)
                .concat(state.todos.slice(action.payload + 1));
            return {
                ...state, 
                todos: filteredToDo
            };

        case TOGGLE_COMPLETE:
            const newTodos = state.todos.map((todo, index) => {
                if (index === action.payload) {
                    return { value: todo.value, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: newTodos
            };
            
        default:
            return { ...state };
    }
};