import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import '../assets/style/nav.css';
import recovon from '../assets/images/recovon-logos-transparent.png';
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
    <img src={recovon} alt="recovon logo" className="nav-logo mx-auto" />
    <h2 className="nav-mobile-logo">Recovon</h2>

    <div className="collapse navbar-collapse nav-element-space">
      <ul className="navbar-nav">
        <li className="">
          <Link to="/doctors" className="nav-link nav-element">Doctors</Link>
        </li>
        <li className="">
          <Link to="/myappointments" className="nav-link nav-element">My Appointments</Link>
        </li>
        <li className="nav-logout-space">
          <LogOut style={{ marginLeft: '' }} />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
