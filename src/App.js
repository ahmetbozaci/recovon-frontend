import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.css';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
