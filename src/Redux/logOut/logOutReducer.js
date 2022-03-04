import { LOGOUT_USER_SUCCESS } from './logOutActions';

const initialState = {
  loggedOut: false,
};

const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER_SUCCESS:
      // console.log('action.payload line 11', action.payload);
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default logOutReducer;
