import React from 'react';
import { Link } from 'react-router-dom';
// import '../app.css';
import '../assets/style/logoutPage.css';

function Logout() {
  return (
    <section className="mainlogout">
      <div className="logoutButton text-center ">
        {/* <div className="hg3">
          <h1>Be HAPPY,</h1>
          <h1> Be HEALTHY</h1>
        </div> */}
        <Link to="login"><button type="button" className="btn text-center first-page-button"> Start your health experience </button></Link>
      </div>
    </section>
  );
}

export default Logout;
