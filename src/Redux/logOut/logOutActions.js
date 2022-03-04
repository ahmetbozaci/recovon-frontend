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
  localStorage.setItem('ANYNAME', JSON.stringify(data.logged_out));
  // console.log('logout data', data);
  return data;
};

export const logOutUser = () => async (dispatch) => {
  const xyz = await quitUser();
  // console.log('xyz', xyz);
  const logOutDetails = {
    loggedOut: xyz.logged_out,
  };
  dispatch(logOutUserSuccess(logOutDetails));
};
