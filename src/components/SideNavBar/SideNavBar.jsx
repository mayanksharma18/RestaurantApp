import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function SideNavBar() {
    return (
        <div className="sidenav" >
        <NavLink  exact to='/countries'> Countries </NavLink>
        <NavLink  to ='/Rankings'> Rankings </NavLink>
        </div>
    );
}

export default SideNavBar;