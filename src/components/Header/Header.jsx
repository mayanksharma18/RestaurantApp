import React from "react";
import Styles from './styles.scss';

const Header = () => {
  return (
    <div className={Styles.header}>
      <a href="/" className={Styles.logo}>
        Top Restaurants
      </a>
    </div>
  );
};

export default Header;
