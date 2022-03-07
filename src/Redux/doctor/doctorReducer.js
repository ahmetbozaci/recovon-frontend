import {
  FETCH_DOCTORS_REQUEST,
  FETCH_DOCTORS_SUCCESS,
  FETCH_DOCTORS_FAILURE,
} from './doctorActions';

const initialState = {
  loading: false,
  doctors: [],
  error: '',
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DOCTORS_SUCCESS:
      return {
        loading: false,
        doctors: action.payload,
        error: '',
      };

    case FETCH_DOCTORS_FAILURE:
      return {
        loading: false,
        doctors: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default doctorReducer;
