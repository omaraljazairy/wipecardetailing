import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

export const Contact = () => (
  <div>
    <h2>Contact voor een offerte</h2>
    <Form>
      <Form.Row>
        <Col sm>
          <Form.Group controlId='company'>
            <Form.Label>Bedrijfnaam</Form.Label>
            <Form.Control type='text' placeholder='uw bedrijfnaam' />
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='emailadres' />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col sm>
          <Form.Group controlId='tel'>
            <Form.Label>Telefoon nummer</Form.Label>
            <Form.Control type='text' placeholder='06 nummer' />
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group controlId='place'>
            <Form.Label>Plaats</Form.Label>
            <Form.Control as='select'>
              <option value='Amsterdam'>Amsterdam</option>
              <option value='Haarlem'>Haarlem</option>
              <option value='Utrecht'>Utrecht</option>
              <option value='Zaandam'>Zaandam</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group controlId='totalCars'>
            <Form.Label>Aantal Autos</Form.Label>
            <Form.Control type='number' placeholder='aantal autos' />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col sm>
          <Form.Group controlId='submit'>
            <Button variant='primary' type='submit'>
            Submit
            </Button>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  </div>
)
