import { createUserAction } from './signupReducer';

const baseURL = `${process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL}/signup`;

export const addUser = async (user) => {
  const newUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation,
    }),
  };
  const response = await fetch(baseURL, newUser);
  return response;
};

export const createUser = (user) => async (dispatch) => {
  addUser(user);
  dispatch(createUserAction(user));
};
