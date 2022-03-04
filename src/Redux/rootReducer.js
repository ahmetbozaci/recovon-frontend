import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import logOutReducer from './logOut/logOutReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  logOutReducer,
});

export default rootReducer;
