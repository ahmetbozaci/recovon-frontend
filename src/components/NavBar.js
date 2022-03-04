import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import LogOut from './LogOut';

const NavBar = () => (
  <div>
    <ul className="navbar-nav mr-auto">
      <li>
        <img src="" alt="" />
        logo
      </li>
      <li><Link to="/" className="nav-link"> Doctors </Link></li>
      <li><Link to="/myappointments" className="nav-link">My Appointments</Link></li>
    </ul>
    <LogOut />
    <div>
      <Footer />
    </div>

  </div>

);

export default NavBar;
