import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import '../../assets/css/toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><img src={logo} width='50' height='50' alt='logo' /></div>
            <div className="toolbar_navigation-items">
              <NavLink exact to='/' activeClassName='active' >Home</NavLink>
              <NavLink exact to='/about' activeClassName='active' >Over Ons</NavLink>
              <NavLink exact to='/services' activeClassName='active' >Services</NavLink>
              <NavLink exact to='/wagenpark' activeClassName='active' >Wagenpark</NavLink>
              <NavLink exact to='/tankstations' activeClassName='active'>Tankstations</NavLink>
              <NavLink exact to='/contact' activeClassName='active'>Contact</NavLink>
              <NavLink exact to='/media' activeClassName='active'>Media</NavLink>
            </div>
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerHandler} />
            </div>
        </nav>
    </header>

);

export default Toolbar;