import {
  FETCH_DOCTORS_SUCCESS,
} from './doctorActions';

const initialState = {
  doctors: [],
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS_SUCCESS:
      return {
        doctors: action.payload,
      };
    default: return state;
  }
};

export default doctorReducer;
