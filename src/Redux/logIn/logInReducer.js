import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from './logInActions';

const initialState = {
  loggedOut: false,
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      // console.log('action.payload line 12', action.payload);
      return {
        // users: action.payload,
        // loggedIn: true,
        // loggedOut: false,
        ...action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      // console.log('action.payload line 11', action.payload);
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default logInReducer;
