import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';

const rootReducer = combineReducers({
  signupReducer,
});

export default rootReducer;
