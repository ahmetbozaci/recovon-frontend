import { LOGIN_USER_SUCCESS } from './logInActions';
// import { LOGOUT_USER_SUCCESS } from './logInActions';

const initialState = {
  loggedIn: false,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        users: action.payload,
        loggedIn: true,
      };
    // case LOGOUT_USER_SUCCESS:
    //   return {
    //     users: action.payload,
    //     loggedIn: false,
    //   };
    default:
      return state;
  }
};

export default logInReducer;
