import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import appointmentReducer from './Appointment/appointmentReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
});

export default rootReducer;
