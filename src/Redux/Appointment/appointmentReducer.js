const CREATE_APPOINTMENT_SUCCESS = 'final-capstone-project/users/CREATE_APPOINTMENT_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_APPOINTMENT_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const createAppointmentSuccess = (apiState) => ({
  type: CREATE_APPOINTMENT_SUCCESS,
  payload: apiState,
});

export default reducer;
