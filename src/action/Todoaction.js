import {PERSIST_TODOS,ADD_TEXT,ADD_TODO,DELETE_TODO,EDIT_TODO,EDIT_ADD_TODO,DELETE_ALL} from "./Types";
import store from "../store";

export const persistTodos = (data) => ({
    type: "PERSIST_TODOS"
  });
  export const addText = value => ({
    type: "ADD_TEXT",
    payload: value
  });
  export const addTodo = todo => ({
    type: ADD_TODO,
    payload: {
      value:todo,
      status: 'notstarted'
    }
  });
  export const deleteTodo = key => ({
    type: "DELETE_TODO",
    payload: key
  });
  
  export const editTodo = key => ({
    type: "EDIT_TODO",
    payload: key
  });
  
  export const editAddTodo = obj => ({
    type: EDIT_ADD_TODO,
    payload: obj
  });
  
  export const deleteAll = () => ({
    type: "DELETE_ALL"
  });
  