import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  let data = useSelector((state) => state);
  let dispatch = useDispatch();
  const markComplete = async (todo) => {
    let todoList = data.todoList;
    await todoList.filter((item) => item.id === todo.id).forEach((item) => (item.complete = true));
    console.log({ todoList });

    await dispatch({
      type: "MARK_COMPLETE",

      data: todoList,
    });
  };

  return (
    <div className=' flex flex-col h-auto py-8 justify-center px-32 rounded-md items-start bg-red-200'>
      {data.todoList.length > 0 ? (
        <div>Click on the list element to mark it complete</div>
      ) : (
        <div>Nothing to show</div>
      )}
      {data.todoList.map((todo) => {
        return (
          <div
            onClick={() => markComplete(todo)}
            className={`border-2  w-full p-2 border-gray-400 rounded-md my-2 flex flex-row items-start ${
              todo.complete && `bg-gray-100`
            } `}
          >
            <div>({todo.id})</div>
            <div
              className={` mx-5 flex  justify-start  flex-col ${
                todo.complete && `line-through bg-gray-100`
              }`}
            >
              {todo.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
