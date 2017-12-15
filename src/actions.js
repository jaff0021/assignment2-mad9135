/* eslint-disable no-console */
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export function toggleStatus(id) {
// eslint-disable-next-line no-console
    //console.log(id);
    return {
        type: TOGGLE_STATUS,
        id: id
    };
}

export function addNewTodo(value) {
    return {
        type: ADD_NEW_TODO,
        value: value
    };
}

export function saveNewTodo() {
    return {
        type: SAVE_NEW_TODO
    };
}