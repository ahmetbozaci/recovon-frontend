import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import '../assets/style/nav.css';
// import Footer from './Footer';
// import '../app.css';
// import logo from '../assets/images/logo.jpg';

const NavBar = () => (
  // <div className="Navigation1">
  //   <ul className="navbar-nav">
  //     <li className="logo">
  //       <img className="imgg" src={logo} alt="logo" />
  //     </li>
  //     <li><Link to="/" className="dnav-link"> Doctors </Link></li>
  //     <li><Link to="/myappointments" className="anav-link">Appointments</Link></li>
  //   </ul>
  //   <LogOut />
  //   <div>
  //     <Footer />
  //   </div>
  // </div>

  <nav className="navbar nav-mobile navbar-expand navbar-dark bg-primary fixed-left">
    <a className="navbar-brand" href>Logo</a>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/doctors" className="nav-link">Doctors</Link>
        </li>
        <li className="">
          <Link to="/myappointments" className="nav-link">My Appointments</Link>
        </li>
        <li className="">
          <LogOut style={{ marginLeft: '' }} />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
