/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import store from './Redux/store';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Doctor, Appointment, MyAppointment, NotMatch, SignupForm, LoginForm, NavBar, LogoutPage,
} from './components/Index';

const SidebarLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        {/* <UserContainer /> */}

        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<SignupForm />} />
            <Route path="doctors" element={<Doctor />} />
            <Route path="appointments" element={<Appointment />} />
            <Route path="myappointments" element={<MyAppointment />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="*" element={<NotMatch />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
          <Route path="logoutpage" element={<LogoutPage />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
