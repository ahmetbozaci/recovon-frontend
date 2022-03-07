import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import appointmentReducer from './Appointment/appointmentReducer';
import doctorReducer from './doctor/doctorReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  doctorReducer,
});

export default rootReducer;
