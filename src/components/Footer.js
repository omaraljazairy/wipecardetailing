import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../assets/css/styles.css'

export const MainFooter = () => (
  <div className='footer'>
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Nav className='m-auto'>
        <Container>
          <span className='header_footer'>copy right 2020</span>
        </Container>
      </Nav>
    </Navbar>
  </div>
)
