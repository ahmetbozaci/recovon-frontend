export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

const baseURL = process.env.REACT_APP_DOCTOR_APPOINTMENT_API_URL;

const logInUserSuccess = (users) => ({
  type: LOGIN_USER_SUCCESS,
  payload: users,
});

const logOutUserSuccess = (users) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: users,
});

export const signInUser = async (user) => {
  const exUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };
  const response = await fetch(`${baseURL}/login`, exUser);
  const data = await response.json();
  localStorage.setItem('token', JSON.stringify(data.jwt));
  localStorage.setItem('ANYNAME', JSON.stringify(data.logged_out));
  return data;
};

export const logInUser = (user) => async (dispatch) => {
  const xyz = await signInUser(user);
  const logInDetails = {
    loggedOut: xyz.logged_out,
  };
  dispatch(logInUserSuccess(logInDetails));
};

export const quitUser = async () => {
  const currUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${baseURL}/logout`, currUser);
  const data = await response.json();
  localStorage.setItem('ANYNAME', JSON.stringify(data.logged_out));
  return data;
};

export const logOutUser = () => async (dispatch) => {
  const xyz = await quitUser();
  const logOutDetails = {
    loggedOut: xyz.logged_out,
  };
  dispatch(logOutUserSuccess(logOutDetails));
};
