import { combineReducers } from 'redux';
import {
  signupReducer,
  logInReducer,
  appointmentReducer, doctorReducer,
  myAppointmentReducer,
} from '.';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  doctorReducer,
  myAppointmentReducer,

});

export default rootReducer;
