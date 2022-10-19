const initialState = {
  name: "",
  password: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "GET_USER_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default LoginReducer;
