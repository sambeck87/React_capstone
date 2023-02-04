import React from 'react';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import '../styles/commons.css';
import '../styles/navbar.css';

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="Navbar" className="flex row first_color">
      <div className="flex row">
        <button className="buttonNav" type="button">
          <IoIosArrowBack style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </button>
        <p>{currentYear}</p>
      </div>
      <p>Top 100 rank</p>
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
