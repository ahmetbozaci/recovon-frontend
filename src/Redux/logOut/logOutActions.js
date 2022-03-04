export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

const logoutURL = 'http://127.0.0.1:3000/logout';

const logOutUserSuccess = (users) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: users,
});

export const quitUser = async () => {
  const currUser = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(logoutURL, currUser);
  const data = await response.json();
  localStorage.setItem('logged_out', JSON.stringify(data.logged_out));
  console.log('logout data', data);
  return data;
};

export const logOutUser = (user) => async (dispatch) => {
  quitUser(user);
  dispatch(logOutUserSuccess(user));
};
