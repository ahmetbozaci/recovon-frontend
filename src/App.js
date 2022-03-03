import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Doctor, Appointment, MyAppointment, NotMatch, SignupForm, LoginForm, NavBar,
} from './components/Index';
// import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="appointments" element={<Appointment />} />
          <Route path="myappointments" element={<MyAppointment />} />
          <Route path="*" element={<NotMatch />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
