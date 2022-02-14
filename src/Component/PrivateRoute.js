import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import Login from "./Login";
const PrivateRoute = ({ children, ...rest }) => {
  const state = useSelector((state) => state.loginData);
  return state.isAuth ? <Todo /> : <Login />;
};

export default PrivateRoute;
