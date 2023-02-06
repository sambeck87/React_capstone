import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import '../styles/commons.css';
import '../styles/navbar.css';

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="Navbar" className="flex row first_color lato">
      <div className="flex row">
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'homeLink')}
          to="/"
          type="button"
        >
          <IoIosArrowBack style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </NavLink>
        <p id="year">{currentYear}</p>
      </div>
      <p id="rank">Top 100 rank</p>
      <div>
        <button className="buttonNav" type="button">
          <BsFillMicFill style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </button>
        <button className="buttonNav" type="button">
          <IoIosSettings style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
