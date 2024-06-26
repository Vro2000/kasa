//src/components/Footer/Footer.jsx
import React from 'react';
import { NavLink } from "react-router-dom"
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer>
      <NavLink to="/"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" /></NavLink>
      <p>© 2020 Kasa. all rights reserved</p>
    </footer>
  );
};



export default Footer;
