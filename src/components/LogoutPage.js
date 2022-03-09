import React from 'react';
import { Link } from 'react-router-dom';
// import '../app.css';
import '../assets/style/logoutPage.css';
import recovon from '../assets/images/recovon-logos-transparent.png';

function Logout() {
  return (
    <section className="mainlogout">
      <div className="first-page-logo-div">
        <img src={recovon} alt="recovon logo" className="first-page-logo" />
      </div>
      <div className="logoutButton text-center">
        <Link to="login"><button type="button" className="btn text-center first-page-button"> Start your health experience </button></Link>
      </div>
    </section>
  );
}

export default Logout;
