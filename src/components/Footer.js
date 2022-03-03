import React from 'react';
import {
  Twitter, Facebook, Instagram, Youtube,
} from 'react-bootstrap-icons';
import '../app.css';

const Footer = () => (
  <div className="iconss">
    <ul className="iconss">
      <Twitter />
      <Facebook />
      <Instagram />
      <Youtube />
    </ul>
  </div>
);

export default Footer;
