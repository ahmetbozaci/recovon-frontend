import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
});

export default rootReducer;
