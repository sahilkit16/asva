const loginData = (state = null, action) => {
  console.log({ action });
  if (action.type === "SET_LOGIN_DATA") {
    return action.data;
  }
  return state;
};

const todoList = (state = null, action) => {
  console.log({ action });
  if (action.type === "SET_TODO_DATA") {
    return action.data;
  }
  return state;
};

const reducers = {
  loginData,
  todoList,
};

export default reducers;
