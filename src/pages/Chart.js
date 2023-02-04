import React from 'react';
import '../styles/Details.css';

const Chart = () => (
  <div className="data-cont">

    <div id="search" className="first_color text_white">
      Attributes
    </div>
    <ul className="details-cont text_white">
      <li className="details-light">
        <span className="margin_left">Name :</span>
        <span className="margin_right">CryptoName</span>
      </li>
      <li className="details-dark">
        <span className="margin_left">Symbol :</span>
        <span className="margin_right">Simbol</span>
      </li>
      <li className="details-light">
        <span className="margin_left">Rank :</span>
        <span className="margin_right">#1</span>
      </li>
      <li className="details-dark">
        <span className="margin_left">Supply :</span>
        <span className="margin_right">Supply</span>
      </li>
      <li className="details-light">
        <span className="margin_left">Market Capital(USD) :</span>
        <span className="margin_right">Capital</span>
      </li>
      <li className="details-dark">
        <span className="margin_left">Volume(USD) 24Hrs :</span>
        <span className="margin_right">Volume</span>
      </li>
      <li className="details-light">
        <span className="margin_left">Price(USD) :</span>
        <span className="margin_right">Price</span>
      </li>
      <li className="details-dark">
        <span className="margin_left">Change Percent(24Hr) :</span>
        <span className="margin_right">Change</span>
      </li>
      <li className="details-light">
        <span className="margin_left">VWAP(24Hr) :</span>
        <span className="margin_right">VWAP</span>
      </li>
    </ul>
  </div>
);

export default Chart;
