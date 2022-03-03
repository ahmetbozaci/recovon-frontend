export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

const baseURL = 'http://127.0.0.1:3000/login';

const logInUserSuccess = (users) => ({
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
  return response;
};

export const logInUser = (user) => async (dispatch) => {
  addUser(user);
  dispatch(logInUserSuccess(user));
};
