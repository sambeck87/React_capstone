import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/Details.css';
import Navbar from '../components/Navbar';
import '../styles/commons.css';

const Chart = () => {
  const params = useParams();
  const { id } = params;
  const crypto = useSelector((state) => state.crytoReducer);

  const filtered = [...crypto].filter(
    (data) => data.id === id,
  );

  return (
    <>
      <Navbar />
      {filtered.map((element) => (
        <div key={element.id} className="data-cont">

          <div id="coinHeader" className="flex row secondary_color text_white header">
            <img id="icon_details" src={element.icon} alt="main_image" />
            <h1 id="cryptoCoin">{element.name}</h1>
          </div>

          <div id="search" className="first_color text_white">
            Attributes
          </div>
          <ul className="details-cont text_white">
            <li className="details-light">
              <span className="margin_left">Name : </span>
              <span className="margin_right">{element.name}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">Symbol :</span>
              <span className="margin_right">{element.symbol}</span>
            </li>
            <li className="details-light">
              <span className="margin_left">Rank :</span>
              <span className="margin_right">{element.rank}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">USD Price :</span>
              <span className="margin_right">{element.price}</span>
            </li>
            <li className="details-light">
              <span className="margin_left">Bitcon Price :</span>
              <span className="margin_right">{element.priceBtc}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">Volume :</span>
              <span className="margin_right">{element.volume}</span>
            </li>
            <li className="details-light">
              <span className="margin_left">Capital Market :</span>
              <span className="margin_right">{element.marketCap}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">Available Supply :</span>
              <span className="margin_right">{element.availableSupply}</span>
            </li>
            <li className="details-light">
              <span className="margin_left">Total Supply :</span>
              <span className="margin_right">{element.totalSupply}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">Price Change (1Hr) :</span>
              <span className="margin_right">{element.priceChange1h}</span>
            </li>
            <li className="details-light">
              <span className="margin_left">Price Change (1D) :</span>
              <span className="margin_right">{element.priceChange1d}</span>
            </li>
            <li className="details-dark">
              <span className="margin_left">Price Change (1W) :</span>
              <span className="margin_right">{element.priceChange1w}</span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Chart;
