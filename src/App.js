import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import './app.css';
import {
  Doctor, Appointment, MyAppointment, NotMatch, SignupForm, LoginForm,
} from './components/Index';
// import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="myappointment" element={<MyAppointment />} />
          <Route path="*" element={<NotMatch />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
