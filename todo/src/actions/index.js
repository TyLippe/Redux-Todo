import { ADD, DELETE, TOGGLE_COMPLETE, DELETE_COMPLETE } from "../reducers";

export const addToDo = todo => {
    return {
        type: ADD,
        payload: todo
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE,
        payload: id
    };
};

export const toggleComplete = id => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    };
};

export const deleteComplete = id => {
    return {
        type: DELETE_COMPLETE,
        payload: id
    }
}
