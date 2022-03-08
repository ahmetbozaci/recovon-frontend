import axios from 'axios';

export const FETCH_MY_APP_REQUEST = 'FETCH_MY_APP_REQUEST';
export const FETCH_MY_APP_SUCCESS = 'FETCH_MY_APP_SUCCESS';
export const FETCH_MY_APP_FAILURE = 'FETCH_MY_APP_FAILURE';
export const DELETE_MY_APP_SUCCESS = 'FETCH_MY_APP_FAILURE';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/appointments`;

const fetchMyAppRequest = () => ({
  type: FETCH_MY_APP_REQUEST,
});

const fetchMyAppSuccess = (myapp) => ({
  type: FETCH_MY_APP_SUCCESS,
  payload: myapp,
});

const fetchMyAppFailure = (myapp) => ({
  type: FETCH_MY_APP_FAILURE,
  payload: myapp,
});

export const deleteMyAppSuccess = (myapp) => ({
  type: DELETE_MY_APP_SUCCESS,
  payload: myapp,
});

export const deleteAppointment = (id) => async (dispatch) => {
  await fetch(`{baseURL}/${id}`, {
    method: 'DELETE',
  });
  dispatch(deleteMyAppSuccess(id));
};

export const fetchMyApp = () => (dispatch) => {
  dispatch(fetchMyAppRequest());
  axios.get(baseURL)
    .then((response) => {
      const myApp = response.data;
      dispatch(fetchMyAppSuccess(myApp));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchMyAppFailure(errorMsg));
    });
};
