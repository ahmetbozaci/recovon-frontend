import {
  FETCH_MY_APP_REQUEST,
  FETCH_MY_APP_SUCCESS,
  FETCH_MY_APP_FAILURE,
  DELETE_MY_APP_SUCCESS,
} from './myAppActions';

const initialState = {
  loading: false,
  myApp: [],
  error: '',
};

const myAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_APP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MY_APP_SUCCESS:
      return {
        loading: false,
        myApp: action.payload,
        error: '',
      };

    case FETCH_MY_APP_FAILURE:
      return {
        loading: false,
        myApp: [],
        error: action.payload,
      };

    case DELETE_MY_APP_SUCCESS:
      return {
        myApp: state.myApp.filter((del) => del.id !== action.payload),
      };

    default: return state;
  }
};

export default myAppReducer;
