import axios from 'axios';

export const FETCH_DOCTORS_REQUEST = 'FETCH_DOCTORS_REQUEST';
export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
export const FETCH_DOCTORS_FAILURE = 'FETCH_DOCTORS_FAILURE';

const fetchDoctorsRequest = () => ({
  type: FETCH_DOCTORS_REQUEST,
});

const fetchDoctorsSuccess = (doctors) => ({
  type: FETCH_DOCTORS_SUCCESS,
  payload: doctors,
});

const fetchDOCTORSFailure = (error) => ({
  type: FETCH_DOCTORS_FAILURE,
  payload: error,
});

const fetchDoctors = () => (dispatch) => {
  dispatch(fetchDoctorsRequest());
  axios.get('https://glacial-basin-02412.herokuapp.com/doctors')
    .then((response) => {
      // response.data is the array of DOCTORS
      const doctors = response.data;
      dispatch(fetchDoctorsSuccess(doctors));
    })
    .catch((error) => {
      // error.message is the error description
      const errorMsg = error.message;
      dispatch(fetchDOCTORSFailure(errorMsg));
    });
};

export default fetchDoctors;
