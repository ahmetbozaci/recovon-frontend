import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './Footer';
import LogOut from './LogOut';
// import '../app.css';
import '../assets/style/nav.css';

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary fixed-left">
    <a className="navbar-brand" href>Logo</a>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Doctors</Link>
        </li>
        <li className="">
          <Link to="/myappointments" className="nav-link">My Appointments</Link>
        </li>
        <li className="pt-5 pl-5">
          <LogOut />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
