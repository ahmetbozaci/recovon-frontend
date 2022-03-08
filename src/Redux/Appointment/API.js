import axios from 'axios';
import { createAppointmentSuccess } from './appointmentReducer';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/appointments`;

const createAppointment = (appointment) => async (dispatch) => {
  const newAppointment = {
    date: appointment.date,
    time: appointment.time,
    user_id: appointment.userID,
    doctor_id: appointment.doctorID,
  };

  const response = await axios.post(baseURL, newAppointment);
  const { data } = response;
  dispatch(createAppointmentSuccess(data));
};

export default createAppointment;
