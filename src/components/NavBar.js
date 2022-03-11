import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import '../assets/style/nav.css';
import recovon from '../assets/images/recovon-logos-transparent.png';

const NavBar = () => (
  <nav className="navbar nav-mobile navbar-expand navbar-dark bg-primary fixed-left">
    <img src={recovon} alt="recovon logo" className="nav-logo mx-auto" />
    <h2 className="nav-mobile-logo">Recovon</h2>
    <div className="collapse navbar-collapse nav-element-space">
      <ul className="navbar-nav">
        <li className="username p-lg-2 pb-lg-4">
          Welcome
          {' '}
          {localStorage.getItem('currentUserName')}
        </li>
        <li className="">
          <Link to="/doctors" className="nav-link nav-element">
            Doctors
          </Link>
        </li>
        <li className="">
          <Link to="/myappointments" className="nav-link nav-element">
            My Appointments
          </Link>
        </li>
        <li className="nav-logout-space">
          <LogOut style={{ marginLeft: '' }} />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
