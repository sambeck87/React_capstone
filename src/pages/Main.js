import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import Investment from '../images/Investment.png';
import '../styles/main.css';
import '../styles/commons.css';

const Main = () => {
  const crypto = useSelector((state) => state.crytoReducer);
  const [search, setSearch] = useState('');

  const searchHandle = (e) => setSearch(e.target.value);

  let filtered = [];
  if (!search) {
    filtered = [...crypto];
  } else {
    filtered = [...crypto].filter(
      (data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex row secondary_color text_white header lato">
        <img className="main_image" src={Investment} alt="main_image" />
        <h1 className="mainTitle">CRYPTO CURRENCY</h1>
      </div>
      <input value={search} id="search" className="first_color text_white lato" type="text" placeholder="   Search by Crypto Name" onChange={searchHandle} />
      <div id="chartContainer" className="grid flex wrap alata">
        {
          filtered.map((element) => (
            <NavLink
              to={`details/${element.id}`}
              key={element.id}
              className="grid_item itemContainer"
            >
              <Item
                id={element.id}
                icon={element.icon}
                name={element.name}
                symbol={element.symbol}
                price={element.price}
              />
            </NavLink>
          ))
        }
      </div>
    </>
  );
};

export default Main;
