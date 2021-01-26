import { PERSIST_TODOS } from "../action/Types";
import { ADD_TEXT } from "../action/Types";
import { ADD_TODO } from "../action/Types";
import { DELETE_TODO } from "../action/Types";
import { EDIT_TODO } from "../action/Types";
import { EDIT_ADD_TODO } from "../action/Types";
import { DELETE_ALL } from "../action/Types";

const initialState = {
    todos: [],
    text: "",
    selected: undefined,
    random: Math.random()
};
export default function (state = initialState, action) {
    switch (action.type) {
        case PERSIST_TODOS:
            return {
                ...state,
                isOpenMenu: action.payload
            }
        case ADD_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat([action.payload])            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((item,key) => key!=action.payload)
            }  
        case EDIT_TODO:
            console.log(state.todos[action.payload])
             return {
                 ...state,
                selected: action.payload,
                text: state.todos[action.payload].value
                } 
        case EDIT_ADD_TODO:
            console.log({
                todos: action.payload.newTodos,
                selected: undefined,
                random: Math.random()
            })
             return {
                 ...state,
                 todos: action.payload.newTodos,
                 random: Math.random()
                } 
         case DELETE_ALL:
             return {
                 ...state,
                 isOpenMenu: action.payload
                }                                                                          
    }

 return state
}