import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import { createStore, combineReducers } from "redux";

import Login from "./Component/Login";
import Todo from "./Component/Todo";
import PrivateRoute from "./Component/PrivateRoute";
let preLoadedState = {};
if (typeof window !== "undefined") {
  preLoadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}
const rootReducer = combineReducers(reducer);
const store = createStore(rootReducer, {});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/todo' element={<PrivateRoute />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
