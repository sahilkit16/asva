import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
const Login = () => {
  let dispatch = useDispatch();
  let loginData = useSelector((state) => state.loginData);
  console.log({ loginData });
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    if (e.target.name === "userName") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = () => {
    if (userName === "test" && password === "asvatest") {
      dispatch({
        type: "SET_LOGIN_DATA",
        data: { isAuth: true },
      });
       navigate("/todo", { replace: true });
    } else {
      setUsername("");
      setPassword("");
      alert("incorrect userName or Password");
    }
  };
  // console.log(props.loginData);
  return (
    <div className="flex flex-col justify-center items-center">
      <div> ASVA TASK </div>
      <input
       className="border-2 rounded border-gray-500 p-2 my-5"
        type='text'
        value={userName}
        name='userName'
        onChange={(e) => {
          onChange(e);
        }}
        placeholder='userName'
      />
      <input
        type='text'
        className='border-2 rounded border-gray-500 p-2 my-5'
        value={password}
        name='password'
        onChange={(e) => {
          onChange(e);
        }}
        placeholder='Password'
      />
      <button  className='border-2 rounded border-gray-500 p-2 my-5 bg-red-100 '  onClick={() => onSubmit()}>Submit</button>
    </div>
  );
};

export default Login;
