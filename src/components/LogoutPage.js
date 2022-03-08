import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';
import logoa from '../image/logo.jpg';

function Logout() {
  return (
    <section className="mainlogout">
      <div className="Navigation1">
        <ul className="navbar-nav mr-auto">
          <li className="logo">
            <img className="imgg" src={logoa} alt="logo" />
          </li>
          <li><Link to="login" className="dnav-link"> login </Link></li>
          <li><Link to="signup" className="anav-link">signup</Link></li>
        </ul>
      </div>

      <div className="welcomelg">
        <div className="hg">
          <h1 className="hg">Docstagram</h1>
        </div>
        <div className="hg3">
          <h1>Be HAPPY,</h1>
          <h1> Be HEALTHY</h1>
        </div>
        <button className="downbtn" type="button"><Link to="signup" className="createapp"> Start your health experience </Link></button>
      </div>
    </section>
  );
}

export default Logout;
