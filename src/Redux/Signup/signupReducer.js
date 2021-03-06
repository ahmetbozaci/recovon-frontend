const CREATE_USER_SUCCESS = 'final-capstone-project/users/CREATE_USER_SUCCESS';
const CREATE_USER_FAILURE = 'final-capstone-project/users/CREATE_USER_FAILURE';

const initialState = {
  user: [],
  errors: null,
  status: false,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        user: payload,
        status: true,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errors: payload.error,
      };
    default:
      return state;
  }
};

export const createUserSuccess = (apiState) => ({
  type: CREATE_USER_SUCCESS,
  payload: apiState,
});
export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: { error },
});
export default reducer;
