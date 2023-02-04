import React from 'react';
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
    <div className="item_container secondary_color">
      <div className="item_content flex column text_white">
        <div className="button_next flex" type="button">
          <BsArrowRightCircle style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
        </div>
        <img className="logo" src={icon} alt="logo" />
        <div className="cryto_data flex column">
          <span className="bold rigth">{name}</span>
          <span className="bold rigth">{symbol}</span>
          <span className="price rigth">
            US$
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
