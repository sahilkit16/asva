import React, { useState } from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    console.log(userName, password, e.target.name);
    if (e.target.name === "userName") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const onSubmit = () => {
    if (userName === "test" && password === "asvatest") {
      props.dispatch({ type: "SET_LOGIN_DATA", data: { isAuth: true } });
      navigate("/todo", { replace: true });
    } else {
      setUsername("");
      setPassword("");
      alert("incorrect userName or Password");
    }
  };
  return (
    <div>
      <input
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
        value={password}
        name='password'
        onChange={(e) => {
          onChange(e);
        }}
        placeholder='Password'
      />
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
};

const mapStateToProps = ({ loginData }) => ({
  loginData,
});

export default connect(mapStateToProps)(Login);
