import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './styles.scss';

function SideNavBar() {
    return (
        <div className={Style.sidenav} >
        <NavLink className={Style.navLinks} exact to='/countries'> Countries </NavLink>
        <NavLink className={Style.navLinks} to ='/Rankings'> Rankings </NavLink>
        </div>
    );
}

export default SideNavBar;