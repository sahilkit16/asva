import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import Thunk from "redux-thunk";
import Login from "./Component/Login";
import Todo from "./Component/Todo";
let preLoadedState = {};
if (typeof window !== "undefined") {
  preLoadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}
const rootReducer = combineReducers(reducer);
const store = createStore(rootReducer, preLoadedState, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
