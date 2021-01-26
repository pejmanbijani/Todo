import React from "react";
import { connect } from "react-redux";
import { addTodo, addText, editAddTodo } from "../action/Todoaction";

const InputField = ({ addText, text, selected, addTodo ,todos,editAddTodo}) => {
  const handleChange = e => addText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
  
    if (selected || selected === 0){

      todos[selected]= {
        value: text
      }
      editAddTodo({
        value: text,
        selected: selected,
        newTodos:todos
      });
    }

    else addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Enter todo..."
        onChange={handleChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj))
});
const mapStateToProps = ({ todo }) => ({
    text: todo.text,
    todos: todo.todos,
    selected: todo.selected
});
export default connect(mapStateToProps,mapDispatchToProps)
(InputField);
