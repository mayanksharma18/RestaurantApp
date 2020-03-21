import React from "react";
import RestaurantsListContainer from "./RestaurantsList/RestaurantsListContainer";
import styles from "./style.scss";

const App = () => {
  return (
    <div className={styles.box}>
      <h1>Hello</h1> 
      <RestaurantsListContainer />
    </div>
  );
};

export default App;
