import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import express from '../assets/img/express-car.jpg'
import premium from '../assets/img/premium-car.jpg'
import luxe from '../assets/img/luxe-car.jpg'

export const Service = () => (
  <Container>
    <Card className='text-center'>
      <Card.Header as='h5'>Express</Card.Header>
      <Card.Body>
        <Row>
          <Col sm>
            <img src={express} style={{ width: '250px', height: '200px' }} />
          </Col>
          <Col sm={8}>
            <Card.Text>hahahah express foo bar</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>20.00</Card.Footer>
    </Card>
    <hr className='Solid' />
    <Card className='text-center'>
      <Card.Header as='h5'>Premium</Card.Header>
      <Card.Body>
        <Row>
          <Col sm>
            <img src={premium} style={{ width: '250px', height: '200px' }} />
          </Col>
          <Col sm={8}>
            <Card.Text>hahahah premium foo bar</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>30.00</Card.Footer>
    </Card>
    <hr className='Solid' />
    <Card className='text-center'>
      <Card.Header as='h5'>Luxe</Card.Header>
      <Card.Body>
        <Row>
          <Col sm>
            <img src={luxe} style={{ width: '250px', height: '200px' }} />
          </Col>
          <Col md={8}>
            <Card.Text>hahahah luxe foo bar</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>40.00</Card.Footer>
    </Card>
  </Container>
)
