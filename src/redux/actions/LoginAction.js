import { GET_USER_NAME, GET_USER_PASSWORD } from "./LoginActionTypes";

export const GetUserNameAction = (name) => {
  return {
    type: GET_USER_NAME,
    name: name,
  };
};

export const GetUserPasswordAction = (password) => {
  return {
    type: GET_USER_PASSWORD,
    password: password,
  };
};
