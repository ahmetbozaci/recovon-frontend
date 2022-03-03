import { combineReducers } from 'redux';
import signupReducer from './Signup/signupReducer';
import appointmentReducer from './Appointment/appointmentReducer';

const rootReducer = combineReducers({
  signupReducer,
  appointmentReducer,
});

export default rootReducer;
