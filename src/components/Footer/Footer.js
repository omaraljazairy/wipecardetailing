import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../assets/css/footer.css';

export const MainFooter = () => (
  <div className='footer'>
    <Navbar expand='lg'>
      <Nav className='m-auto'>
        <Container>
          <span>Copyright © 2020 wipecardetailing. All Rights Reserved</span>
        </Container>
      </Nav>
    </Navbar>
  </div>
)
