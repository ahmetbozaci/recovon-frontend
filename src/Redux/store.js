import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import fetchDoctors from './doctor/doctorActions';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);
store.dispatch(fetchDoctors());

export default store;
