import { LOGOUT_USER_SUCCESS } from './logOutActions';

const initialState = {
  loggedIn: true,
  loggedOut: false,
};

const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER_SUCCESS:
      return {
        users: action.payload,
        loggedIn: false,
        loggedOut: localStorage.getItem('logged_out'),
      };
    default:
      return state;
  }
};

export default logOutReducer;
