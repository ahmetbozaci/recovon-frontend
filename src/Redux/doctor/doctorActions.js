import axios from 'axios';

export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';

const fetchDoctorsSuccess = (doctors) => ({
  type: FETCH_DOCTORS_SUCCESS,
  payload: doctors,
});

const fetchDoctors = () => (dispatch) => {
  axios.get('http://localhost:3000/doctors')
    .then((response) => {
      // response.data is the array of DOCTORS
      const doctors = response.data;
      dispatch(fetchDoctorsSuccess(doctors));
    });
};

export default fetchDoctors;
