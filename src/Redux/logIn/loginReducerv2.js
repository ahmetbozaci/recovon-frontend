const LOGIN_SUCCESS = 'final-capstone-project/users/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'final-capstone-project/users/LOGIN_FAILURE';

const initialState = {
  current_user: [],
  errors: null,
  status: false,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        current_user: payload,
        status: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errors: payload.error,
      };
    default:
      return state;
  }
};

export const loginSuccess = (apiState) => ({
  type: LOGIN_SUCCESS,
  payload: apiState,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
export default reducer;
