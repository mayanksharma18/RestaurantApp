/* eslint-disable react/prop-types */
import React from "react";
import Tile from "../../Reusable/Tile";

 import  Style from './styles.scss';

// eslint-disable-next-line react/prop-types
function RestaurantListByCountries({ countries }) {
  if (countries.length === 0) {
    return null;
  }
  return (
    <div className={Style.flexContainer}>
      {
        countries.map(element => (
          <Tile id={element} key={element} countryName={element}>
            {element}
          </Tile>
        ))
      }
    </div>
  );
}

export default RestaurantListByCountries;
