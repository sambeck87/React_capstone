import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/crypto/CryptoData';
import Item from '../components/Item';
import '../styles/main.css';

let flag = false;
const Main = () => {
  const crypto = useSelector((state) => state.crytoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(getData());
      flag = true;
    }
  }, [dispatch]);

  return (
    <div className="flex wrap">
      <input id="search" className="first_color text_white" type="text" placeholder="Search by Crypto Name" />
      {
      crypto.map((element) => (
        <button type="button" key={element.id} className="itemContainer">
          <Item
            id={element.id}
            icon={element.icon}
            name={element.name}
            symbol={element.symbol}
            price={element.price}
          />
        </button>
      ))
}
    </div>
  );
};

export default Main;
