const loginData = (state = null, action) => {
  
  if (action.type === "SET_LOGIN_DATA") {
    return action.data;
  }
  return state;
};

const todoList = (state =[], action) => {

  if (action.type === "SET_TODO_DATA") {
    return [...state, action.data];
  }
  return state;
};

const reducers = {
  loginData,
  todoList,
};

export default reducers;
