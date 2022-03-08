import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import appointmentReducer from './Appointment/appointmentReducer';
import myAppReducer from './MyApp/myAppReducer';
import doctorInfoReducer from './DoctorInfo/doctorInfoReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  myAppReducer,
  doctorInfoReducer,
});

export default rootReducer;
