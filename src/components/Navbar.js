import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo2.png'
import '../assets/css/styles.css'

function MainNavbar () {
  const styles = {
    navlinks: {
      color: 'white',
      paddingInline: '15px'
    }
  }

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' color='white'>
        <Navbar.Brand>
          <img src={logo} width='50' height='50' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='m-auto'>
            <Nav>
              <NavLink exact to='/' activeClassName='active' style={styles.navlinks}>Home</NavLink>
              <NavLink exact to='/service' activeClassName='active' style={styles.navlinks}>Service</NavLink>
              <NavLink exact to='/about' activeClassName='active' style={styles.navlinks}>Over Ons</NavLink>
              <NavLink exact to='/contact' activeClassName='active' style={styles.navlinks}>Contact</NavLink>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MainNavbar
