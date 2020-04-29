/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles.scss';

const Tile = ({ id, image, countryName, handleClick, children }) => {
  return (  
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <button className={Style.card}id={id} onClick={handleClick} type="button"> 
      <img className={Style.img} src={image} alt={countryName} />
      <div className={Style.container}>
        <h4>
          <b>{countryName}</b>
          {children}
        </h4>
      </div>
    </button>
  );
};

Tile.propTypes = {
  id: PropTypes.string,   
  image: PropTypes.string,
  countryName: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([
   PropTypes.arrayOf(PropTypes.node),
   PropTypes.node
  ]),
};
Tile.defaultProps = {
  id: '12345',
  image:
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1933&q=80',
  countryName: 'Not Provided',
  handleClick: () => {},
  children: null,
};

export default Tile;
