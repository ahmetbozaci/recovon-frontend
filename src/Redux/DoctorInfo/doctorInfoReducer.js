import {
  FETCH_DOCTOR_SUCCESS,
} from './doctorInfoActions';

const initialState = {
  doctors: [],
};

const doctorInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTOR_SUCCESS:
      return {
        doctors: action.payload,
      };

    default: return state;
  }
};

export default doctorInfoReducer;
