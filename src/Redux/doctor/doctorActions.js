import axios from 'axios';

export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';

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

export default fetchDoctors;
