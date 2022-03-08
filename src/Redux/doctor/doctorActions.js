import axios from 'axios';

export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/doctors`;

const fetchDoctorsSuccess = (doctors) => ({
  type: FETCH_DOCTORS_SUCCESS,
  payload: doctors,
});

const fetchDoctors = () => (dispatch) => {
  axios.get(baseURL)
    .then((response) => {
      const doctors = response.data;
      dispatch(fetchDoctorsSuccess(doctors));
    });
};

export default fetchDoctors;
