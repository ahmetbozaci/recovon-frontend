import { LOGIN_USER_SUCCESS } from './logInActions';

const initialState = [];

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};

export default logInReducer;
