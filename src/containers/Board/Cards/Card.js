import React, { PropTypes } from 'react';
import moment from 'moment';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
  column: PropTypes.number
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');

const randomTime = () => moment().add(Math.floor(Math.random() * 8) + 8, 'hours').format('LT');
const getColumnsDate = (x) => {
  const divs = document.getElementsByClassName('desk-name');
  return divs[x].innerHTML;
};
const Card = (props) => {
  const { style, item, column } = props;
  // console.log(this.parentNode.nodeName);
  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`} alt="" />
        </div>
        <div className="item-content">
          <div className="item-author">{`${item.companyName} ${item.city}`}</div>
          <p><b>Expected Delivery Time:</b> {randomTime()}</p>
          <p>{column}</p>
        </div>
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
          <a href="#"><img src={galPng} alt="Add perfomers" /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 1}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 2}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 3}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
        <div className="delete-perfomers">
          <a href="#"><img src={delPng} alt="Delete perfomers" /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 4}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
