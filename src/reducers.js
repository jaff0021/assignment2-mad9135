import { ADD_NEW_TODO, TOGGLE_STATUS, SAVE_NEW_TODO } from "./actions";

export function mainApp(state, action) {
    let newState = Object.assign({}, state);
    let todoList = newState.todoList.slice();
    let newValue = action.value;
    let newItem = {};
    const lastId = todoList[todoList.length-1].id;

    switch(action.type) {
        case TOGGLE_STATUS:
            for (let i = 0; i < todoList.length; i++) {
            let todo = todoList[i];
            let id = action.id;
                if (todo.id == id) {
                    todo.status = (todo.status) ? 0 : 1;
                    break;
               }
            }
            newState = Object.assign(({}, newState, {todoList}));
            break;
        case ADD_NEW_TODO:
            newState = Object.assign({}, newState, {"addTodoValue": newValue});
            break;
        case SAVE_NEW_TODO:
            newItem.id = lastId+1;
            newItem.key = lastId+1;
            newItem.text = newState.addTodoValue;
            newItem.status = 0;
            todoList.push(newItem);
            newState = Object.assign({}, newState, {todoList, "addTodoValue": ""});
            break;
        default:
            return state;
    }
    return newState;
}
