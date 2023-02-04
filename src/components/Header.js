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
      <input id="search" className="first_color text_white" type="text" placeholder="Search by Crypto Name" />
    </div>
  </>
);

export default Header;
