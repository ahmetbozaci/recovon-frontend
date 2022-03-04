import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import appointmentReducer from './Appointment/appointmentReducer';
import myAppReducer from './MyApp/myAppReducer';
import doctorReducer from './Doctor/doctorReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  myAppReducer,
  doctorReducer,
});

export default rootReducer;
