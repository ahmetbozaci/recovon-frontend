import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import LogOut from './LogOut';
import '../app.css';
import logo from '../assets/images/logo.jpg';

const NavBar = () => (
  <div className="Navigation1">
    <ul className="navbar-nav">
      <li className="logo">
        <img className="imgg" src={logo} alt="logo" />
      </li>
      <li><Link to="/" className="dnav-link"> Doctors </Link></li>
      <li><Link to="/myappointments" className="anav-link">Appointments</Link></li>
    </ul>
    <LogOut />
    <div>
      <Footer />
    </div>
  </div>

);

export default NavBar;
