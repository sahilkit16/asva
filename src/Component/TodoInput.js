import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const TodoInput = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const handleTodoChange = (e) => {
    let value = e.target.value;
    setTodoValue(value);
  };

  useEffect(() => {
    console.log(props.todoList);
  }, [props.todoList]);

  const handleAddTodo = () => {
    if (todoValue === "") {
      alert("todo input cant be empty");
    } else {
      let todos = props.todoList;

      let newTodo = {
        id: todos && todos.length,
        text: todoValue,
        completed: false,
      };

      todos.push(newTodo);

      props.dispatch({ type: "SET_TODO_LIST", data: { ...todos } });
      setTodoValue("");
    }
  };
  return (
    <div>
      <input
        type='text'
        value={todoValue}
        onChange={(e) => {
          handleTodoChange(e);
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

const mapStateToProps = ({ loginData, todoList }) => ({
  loginData,
  todoList,
});

export default connect(mapStateToProps)(TodoInput);
