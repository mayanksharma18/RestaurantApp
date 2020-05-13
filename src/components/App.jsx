import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header'
import SideNavBar from "./SideNavBar/SideNavBar";
import RestaurantsListContainer from "./RestaurantsList/RestaurantsListContainer";
import "./style.scss";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <SideNavBar/>
    <RestaurantsListContainer />
    </BrowserRouter>
  );
};

export default App;
