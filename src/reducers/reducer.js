const initLoginDataState = {
  isAuth: false,
};

const loginData = (state = initLoginDataState, action) => {
  if (action.type === "SET_LOGIN_DATA") {
    return action.data;
  }
  return state;
};

const todoList = (state = [], action) => {
  if (action.type === "SET_TODO_DATA") {
    return [...state, action.data];
  } else if (action.type === "MARK_COMPLETE") {
    return [...action.data];
  }
  else if (action.type === "DELETE_ALL") {
    return [];
  }
  return state;
};

const reducers = {
  loginData,
  todoList,
};

export default reducers;
