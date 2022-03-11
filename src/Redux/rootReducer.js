import { combineReducers } from 'redux';
import {
  signupReducer,
  logInReducer,
  appointmentReducer,
  doctorReducer,
  myAppReducer,
} from './index';

const rootReducer = combineReducers({
  signupReducer,
  logInReducer,
  appointmentReducer,
  doctorReducer,
  myAppReducer,

});

export default rootReducer;
