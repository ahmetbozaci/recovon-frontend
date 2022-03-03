import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from './Footer';

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
    <Button type="button">logout</Button>
    <div>
      <Footer />
    </div>

  </div>

);

export default NavBar;
