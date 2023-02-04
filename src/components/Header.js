import React from 'react';
import Navbar from './Navbar';
import Investment from '../images/Investment.png';
import '../styles/header.css';
import '../styles/commons.css';

const Header = () => (
  <>
    <Navbar />
    <div id="header" className="flex row secondary_color text_white">
      <img id="main_image" src={Investment} alt="main_image" />
      <h1 id="mainTitle">CRYPTO CURRENCY</h1>
    </div>
  </>
);

export default Header;
