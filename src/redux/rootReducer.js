import { combineReducers } from 'redux';
// import userReducer from './user/userReducer';
import signupReducer from './Signup/signup';

const rootReducer = combineReducers({
  // user: userReducer,
  signupReducer,
});

export default rootReducer;
