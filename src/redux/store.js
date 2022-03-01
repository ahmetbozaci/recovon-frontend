import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './user/userReducer';

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
