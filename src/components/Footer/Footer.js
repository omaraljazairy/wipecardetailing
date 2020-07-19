import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/footer.css';
import SocialmediaIcons from '../SocialmediaItems/SocialmediaIcons';

export const MainFooter = () => (
  <div className='footer'>
    <Navbar expand='lg'>
      <Nav className='m-auto'>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm='auto'>
              <span>Copyright © 2020 wipecardetailing. All Rights Reserved</span>
            </Col>
            <Col sm={8}>
              <SocialmediaIcons />
            </Col>
          </Row>
        </Container>
      </Nav>
    </Navbar>
  </div>
)
