import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const List = ({ todos,random }) => {
  console.log(random)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "0 auto",
        height: "200px",
        overflowY: "auto",
        overflowX: "hidden"
      }}
    >
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
      
    </div>
  );
};
const mapStateToProps = state => ({
  todos: state.todo.todos,
  random: state.todo.random,

});
export default connect(mapStateToProps)(List);
