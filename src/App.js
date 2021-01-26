import React, { useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import { deleteAll, persistTodos } from "./action/Todoaction";
import { connect } from "react-redux";



const App = (props) => {
  const persistTodos = props.persistTodos
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
      
      <Input />
      <List />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
    
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  (state) => ({
    state: state.reducer
  }),
  {
    persistTodos,deleteAll
  }
)(App);
