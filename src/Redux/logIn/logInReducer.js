import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from './logInActions';

const initialState = [{}];

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default logInReducer;
