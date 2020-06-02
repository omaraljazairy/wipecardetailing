import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
// import ScriptTag from 'react-script-tag'
import Icon from 'react-web-vector-icons'
import ReCAPTCHA from 'react-google-recaptcha'
import captchaConfig from '../configs/captch.json'
import { validateCompanyname, validateMobileno, validateEmail } from '../services/validators'
/**
 * this is the Contact functional component. It renders a form that uses the google
 * captcha v2 to prevent the form submition from bots.
 * It calls the nodejs api with the form values to sent an email.
 * shows the api response when the form is submitted.
 * @author Omar Aljazairy
 * @version 1.0
 */

export const Contact = () => {
  const [companyName, setCompanyName] = useState(null)
  const [email, setEmail] = useState(null)
  const [tel, setTel] = useState(null)
  const [city, setCity] = useState('Amsterdam')
  const [totalCars, setTotalCars] = useState(null)
  const [captcha, setCaptcha] = useState(null)

  const setAndValidateForm = (field, val) => {
    console.log('field: ', field, ' val: ', val)
    switch (field) {
      case 'companyName':
        if (validateCompanyname(val)) {
          setCompanyName(val)
        }
        break
      case 'tel':
        if (validateMobileno(val)) {
          setTel(val)
        }
        break
      case 'email':
        if (validateEmail(val)) {
          setEmail(val)
        }
        break
      case 'city':
        setCity(val)
        break
      case 'totalCars':
        if (!isNaN(val)) {
          setTotalCars(val)
        }
        break
      default:
        return false
    }
  }

  const onCaptchaChange = value => {
    console.log('ReCAPTCHA: ', value)
    setCaptcha(value)
  }

  const handleSubmit = event => {
    const fields = [companyName, email, tel, city, totalCars, captcha]
    const isValid = fields.every((val) => val !== null)
    console.log('fields are: ', fields)
    console.log('submit pressed and isValid is ', isValid)

    if (isValid) {
      console.log('form is valid')
    } else {
      console.log('invalid form')
    }
    event.preventDefault()
  }

  return (
    <div>
      {/* <ScriptTag type='text/javascript' src='https://www.google.com/recaptcha/api.js' async defer /> */}
      <h2>Contact voor een offerte</h2>
      {/* <Form method='POST' action='http://0.0.0.0:3002/send'> */}
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col sm>
            <Form.Group controlId='company'>
              <Form.Label>Bedrijfnaam</Form.Label>
              <Form.Control type='text' placeholder='uw bedrijfnaam' name='companyName' onChange={val => setAndValidateForm('companyName', val.target.value)} />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='emailadres' name='email' onChange={val => setAndValidateForm('email', val.target.value)} />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col sm>
            <Form.Group controlId='tel'>
              <Form.Label>Telefoon nummer</Form.Label>
              <Form.Control type='text' placeholder='06 nummer' name='tel' onChange={val => setAndValidateForm('tel', val.target.value)} />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group controlId='place'>
              <Form.Label>Plaats</Form.Label>
              <Form.Control as='select' name='city' onChange={val => setAndValidateForm('city', val.target.value)}>
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
              <Form.Control type='number' placeholder='aantal autos' name='totalCars' onChange={val => setAndValidateForm('totalCars', val.target.value)} min='1' />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col sm>
            <Form.Group controlId='captcha'>
              <ReCAPTCHA
                sitekey={captchaConfig.googleCaptchaSiteKey_dev}
                onChange={onCaptchaChange}
              />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group controlId='submit'>
              <Button variant='primary' type='submit'>
            Submit
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
      <Icon name='trash' font='Entypo' color='green' size={30} />
    </div>
  )
}
