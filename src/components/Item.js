import React from 'react';
import PropTypes from 'prop-types';
import '../styles/item.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Item = (props) => {
  const {
    icon,
    name,
    symbol,
    price,
  } = props;
  return (
    <div className="item_container">
      <div className="item_content flex column text_white">
        <div className="button_next flex" type="button">
          <BsArrowRightCircle style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </div>
        <img data-testid="icon" className="logo" src={icon} alt="logo" />
        <div className="cryto_data flex column">
          <span data-testid="name" className="bold rigth">{name}</span>
          <span data-testid="symbol" className="bold rigth">{symbol}</span>
          <span data-testid="price" className="price rigth">
            US$
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
