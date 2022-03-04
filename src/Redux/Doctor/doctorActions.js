import axios from 'axios';

export const FETCH_DOCTOR_SUCCESS = 'FETCH_DOCTOR_SUCCESS';

const fetchDoctorSuccess = (doctors) => ({
  type: FETCH_DOCTOR_SUCCESS,
  payload: doctors,
});

const fetchDoctor = () => (dispatch) => {
  axios.get('https://final-api-55.herokuapp.com/doctors')
    .then((response) => {
      // response.data is the array of doctors
      const doctors = response.data;
      dispatch(fetchDoctorSuccess(doctors));
    });
};

export default fetchDoctor;
