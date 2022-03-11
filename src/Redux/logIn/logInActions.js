export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

const baseURL = 'https://final-api-55.herokuapp.com';

const logInUserSuccess = (users) => ({
  type: LOGIN_USER_SUCCESS,
  payload: users,
});

const logOutUserSuccess = (users) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: users,
});

export const logInUser = (user) => async (dispatch) => {
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
  console.log(data);
  const currentUserName = data.user.name;
  const currentUserId = data.user.id;
  localStorage.setItem('currentUserName', currentUserName);
  localStorage.setItem('currentUserId', currentUserId);
  dispatch(logInUserSuccess(data));
  return data;
};

export const logOutUser = () => async (dispatch) => {
  const currUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`${baseURL}/logout`, currUser);
  const data = await response.json();
  dispatch(logOutUserSuccess(data));
  return data;
};
