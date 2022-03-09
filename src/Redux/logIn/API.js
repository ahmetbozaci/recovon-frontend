/* eslint-disable no-unused-vars */
import axios from 'axios';
import { loginSuccess, loginFailure } from './loginReducerv2';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/login`;

const loginUser = (user) => async (dispatch) => {
  const newUser = {
    email: user.email,
    password: user.password,
  };

  const response = await axios.post(baseURL, newUser);
  const { data } = response;
  console.log(data);
  // const { status, errors } = data;
  // if (status !== 'error') {
  //   dispatch(loginSuccess(data));
  // } else {
  //   dispatch(loginFailure(errors));
  // }
};

export default loginUser;
