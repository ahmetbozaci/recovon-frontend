import axios from 'axios';

export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
export const FETCH_ONE_DOCTOR_SUCCESS = 'FETCH_ONE_DOCTOR_SUCCESS';

const baseURL = 'https://final-api-55.herokuapp.com/doctors';

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

const fetchOneDoctorSuccess = (doctor) => ({
  type: FETCH_ONE_DOCTOR_SUCCESS,
  payload: doctor,
});

export const fetchOneDoctor = (id) => (dispatch) => {
  axios.get(`${baseURL}/${id}`)
    .then((response) => {
      const doctor = response.data;
      dispatch(fetchOneDoctorSuccess(doctor));
    });
};
export default fetchDoctors;
