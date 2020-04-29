import React from "react";
import { BrowserRouter } from 'react-router-dom';
import RestaurantsListContainer from "./RestaurantsList/RestaurantsListContainer";
import styles from "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.box}>
      <RestaurantsListContainer />
    </div>
    </BrowserRouter>
  );
};

export default App;
