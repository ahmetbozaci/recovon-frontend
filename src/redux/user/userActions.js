import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // response.data is the array of users
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      // error.message is the error description
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    });
};

export default fetchUsers;
