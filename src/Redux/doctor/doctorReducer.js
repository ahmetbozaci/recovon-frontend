import {
  FETCH_DOCTORS_SUCCESS,
  FETCH_ONE_DOCTOR_SUCCESS,
} from './doctorActions';

const initialState = {
  doctors: [],
  oneDoctor: [],
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS_SUCCESS:
      return {
        doctors: [...action.payload],
      };
    case FETCH_ONE_DOCTOR_SUCCESS:
      return {
        ...state, oneDoctor: [action.payload],
      };
    default: return state;
  }
};

export default doctorReducer;
