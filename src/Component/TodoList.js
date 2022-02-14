import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const TodoInput = ({ todoData }) => {
    console.log({todoData})
  return todoData.length ? (
    <div>
      {todoData.map((todo, index) => {
        <div key={todo.id}>
          <div>{todo.text}</div>
        </div>;
      })}
    </div>
  ) : (
    <div>test</div>
  );
};

const mapStateToProps = ({ loginData, todoList }) => ({
  loginData,
  todoList,
});

export default connect(mapStateToProps)(TodoInput);
