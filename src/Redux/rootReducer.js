import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import logInReducer from './logIn/logInReducer';
import appointmentReducer from './Appointment/appointmentReducer';
import myAppReducer from './MyApp/myAppReducer';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  myAppReducer,
});

export default rootReducer;
