import axios from 'axios';

export const FETCH_MY_APP_REQUEST = 'FETCH_MY_APP_REQUEST';
export const FETCH_MY_APP_SUCCESS = 'FETCH_MY_APP_SUCCESS';
export const FETCH_MY_APP_FAILURE = 'FETCH_MY_APP_FAILURE';
export const DELETE_MY_APP_SUCCESS = 'FETCH_MY_APP_FAILURE';

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
  await fetch(`https://final-api-55.herokuapp.com/appointments/${id}`, {
    method: 'DELETE',
  });
  dispatch(deleteMyAppSuccess(id));
};

export const fetchMyApp = () => (dispatch) => {
  dispatch(fetchMyAppRequest());
  axios.get('https://final-api-55.herokuapp.com/appointments')
    .then((response) => {
      // response.data is the array of users
      const myApp = response.data;
      dispatch(fetchMyAppSuccess(myApp));
    })
    .catch((error) => {
      // error.message is the error description
      const errorMsg = error.message;
      dispatch(fetchMyAppFailure(errorMsg));
    });
};
