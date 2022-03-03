export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';


const baseURL = 'http://127.0.0.1:3000/login';
const logoutURL = 'http://127.0.0.1:3000/logout';

const logInUserSuccess = (users) => ({
  type: LOGIN_USER_SUCCESS,
  payload: users,
});

const logOutUserSuccess = (users) => ({
  type: LOGIN_USER_SUCCESS,
  payload: users,
});

export const addUser = async (user) => {
  const exUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  };
  const response = await fetch(baseURL, exUser);
  const data = await response.json();
  console.log('data', data);
  localStorage.setItem('token', JSON.stringify(data.jwt));
  return data;
};

export const logInUser = (user) => async (dispatch) => {
  addUser(user);
  dispatch(logInUserSuccess(user));
};

export const logOut = async (user) => {
  const exUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(logoutURL, exUser);
  const data = await response.json();
  return data;
};

export const logOutUser = (user) => async (dispatch) => {
  logOut(user);
  dispatch(logOutUserSuccess(user));
};
