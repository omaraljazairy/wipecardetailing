import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import express from '../assets/img/express-car.jpg'
import premium from '../assets/img/premium-car.jpg'
import luxe from '../assets/img/luxe-car.jpg'

export const Service = () => {
  const styles = {
    header_express: {
      background: '#cc6633',
      textAlign: 'center'
    },
    header_premium: {
      background: '#d7d7d7',
      textAlign: 'center'
    },
    header_luxe: {
      background: '#c9b037',
      textAlign: 'center'
    },
    image: {
      width: '230px',
      height: '200px'
    }
  }

  return (
    <Container>
      <Card className='text-left'>
        <Card.Header as='h5' style={styles.header_express}>Express</Card.Header>
        <Card.Body>
          <Row>
            <Col sm>
              <img src={express} style={styles.image} alt='Express' />
            </Col>
            <Col sm={8}>
              <Card.Text>
                <h2>hahahah express</h2>
                <p>goed kijken foo bar</p>
                <span>goed begrijpen</span>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>&euro; 20.00 - inclusief ontbijt</Card.Footer>
      </Card>
      <hr className='Solid' />
      <Card className='text-left'>
        <Card.Header as='h5' style={styles.header_premium}>Premium</Card.Header>
        <Card.Body>
          <Row>
            <Col sm>
              <img src={premium} style={styles.image} alt='Premium' />
            </Col>
            <Col sm={8}>
              <Card.Text>
                <h2>hahahah premium</h2>
                <p>goed sjnapie foo bar</p>
                <span>ik niet begrijpen</span>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>&euro; 30.00 - inclusief lunch</Card.Footer>
      </Card>
      <hr className='Solid' />
      <Card className='text-left'>
        <Card.Header as='h5' style={styles.header_luxe}>Luxe</Card.Header>
        <Card.Body>
          <Row>
            <Col sm>
              <img src={luxe} style={styles.image} alt='Express' />
            </Col>
            <Col md={8}>
              <Card.Text>
                <h2>hahahah luxe</h2>
                <p>porque porque foo bar</p>
                <span>no entiendo no entiendo</span>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>&euro; 40.00 - inclusief dinner </Card.Footer>
      </Card>
    </Container>
  )
}
