export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

const baseURL = 'http://127.0.0.1:3000/login';

const logInUserSuccess = (users) => ({
  type: LOGIN_USER_SUCCESS,
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
  const response = await fetch(baseURL, exUser);
  const data = await response.json();
  // console.log('data', data);
  localStorage.setItem('token', JSON.stringify(data.jwt));
  localStorage.setItem('ANYNAME', JSON.stringify(data.logged_out));
  return data;
};

export const logInUser = (user) => async (dispatch) => {
  const xyz = await signInUser(user);
  const logInDetails = {
    loggedOut: xyz.logged_out,
    loggedIn: !xyz.logged_out,
  };
  dispatch(logInUserSuccess(logInDetails));
};
