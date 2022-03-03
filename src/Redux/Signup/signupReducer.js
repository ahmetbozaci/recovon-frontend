const CREATE_USER = 'final-capstone-project/users/CREATE_USER';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export const createUserAction = (apiState) => ({
  type: CREATE_USER,
  payload: apiState,
});

export default reducer;
