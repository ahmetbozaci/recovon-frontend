import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import logOutReducer from './logOut/logOutReducer';
import appointmentReducer from './Appointment/appointmentReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  logOutReducer,
  appointmentReducer,
});

export default rootReducer;
