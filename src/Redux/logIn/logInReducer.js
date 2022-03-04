import { LOGIN_USER_SUCCESS } from './logInActions';
// import { LOGOUT_USER_SUCCESS } from './logInActions';

const initialState = {
  loggedIn: false,
  loggedOut: true,
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
    default:
      return state;
  }
};

export default logInReducer;
