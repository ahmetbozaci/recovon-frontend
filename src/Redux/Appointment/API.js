import { createAppointmentAction } from './appointmentReducer';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/appointments`;

export const addAppointment = async (appointment) => {
  const newAppointment = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: appointment.date,
      time: appointment.time,
      user_id: appointment.userID,
      doctor_id: appointment.doctorID,
    }),
  };
  const response = await fetch(baseURL, newAppointment);
  return response;
};

export const createAppointment = (appointment) => async (dispatch) => {
  addAppointment(appointment);
  dispatch(createAppointmentAction(appointment));
};
