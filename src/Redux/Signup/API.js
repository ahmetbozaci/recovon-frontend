import axios from 'axios';
import { createUserSuccess, createUserFailure } from './signupReducer';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/signup`;

const createUser = (user) => async (dispatch) => {
  const newUser = {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.passwordConfirmation,
  };

  const response = await axios.post(baseURL, newUser);
  const { data } = response;
  const currentUserName = data.user.name;
  const currentUserId = data.user.id;
  localStorage.setItem('currentUserName', currentUserName);
  localStorage.setItem('currentUserId', currentUserId);
  const { status, errors } = data;
  if (status !== 'error') {
    dispatch(createUserSuccess(data));
  } else {
    dispatch(createUserFailure(errors));
  }
};

export default createUser;
