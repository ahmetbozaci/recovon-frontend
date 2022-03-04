import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import '../app.css';

const NavBar = () => (
  <div className="Navigation1">
    <ul className="navbar-nav mr-auto">
      <li className="logo">
        <img src="ddfdfadf" alt="logo" />
      </li>
      <li><Link to="/" className="nav-link"> Doctors </Link></li>
      <li><Link to="/myappointments" className="nav-link">My Appointments</Link></li>
    </ul>
    <Link to="/logoutpage" className="nav-link">
      {' '}
      <Button type="button">logout</Button>
    </Link>
    <div>
      <Footer />
    </div>

  </div>

);

export default NavBar;
