import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.css';
// import UserContainer from './components/UserContainer';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <SignupForm />
      </div>
    </Provider>
  );
}

export default App;
