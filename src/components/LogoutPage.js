import React from 'react';
import { Link } from 'react-router-dom';
import '../app.css';

function Logout() {
  return (
    <section className="mainlogout">
      <div className="lnav">
        <ul className="lls">
          <li className="logo">
            <img src="ddfdfadf" alt="logo" />
          </li>
          <li>login</li>
          <li>signup</li>
          <Link to="/" className="nav-link">temporal home  </Link>
        </ul>
      </div>
      <div className="welcomelg">
        <h1 className="hg">Health-Guru</h1>
        <h2 className="hg2">Health is wealth, he who knows this knows peace </h2>
        <h1 className="hg3">Be HAPPY, Be HEALTHY</h1>

        <button type="button">learn-more</button>
        <button type="button">Begin your experience with Health-Guru</button>
      </div>
    </section>
  );
}

export default Logout;
