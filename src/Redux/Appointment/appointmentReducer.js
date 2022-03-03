const CREATE_APPOINTMENT = 'final-capstone-project/users/CREATE_APPOINTMENT';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return action.payload;
    default:
      return state;
  }
};

export const createAppointmentAction = (apiState) => ({
  type: CREATE_APPOINTMENT,
  payload: apiState,
});

export default reducer;
