import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const TodoInput = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state);
  console.log(data);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const submit = () => {
    if (value !== "") {
      let obj = {
        text: value,
        id: data.todoList.length,
        complete: false,
      };

      dispatch({
        type: "SET_TODO_DATA",
        data: obj,
      });
      setValue("");
    } else {
      alert("value cant be empty");
    }
  };

  return (
    <div className='flex flex-row justify-center '>
      <input
        className='border-2 rounded border-gray-500 p-2 my-5'
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        type='text'
      />
      <button className='border-2 mx-5 rounded border-gray-500 p-2 my-5' onClick={submit}>
        Add To List
      </button>
      {data.todoList.length>0 && (
        <button
          className='border-2 mx-1 rounded border-gray-500 p-2 my-5'
          onClick={() => {
            dispatch({
              type: "DELETE_ALL",
            });
          }}
        >
          Delet All
        </button>
      )}
    </div>
  );
};

export default TodoInput;
