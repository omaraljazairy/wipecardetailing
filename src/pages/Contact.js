import React, { useState } from 'react'
import { Form, Col, Row, Button, Image } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from '../axios'
import apiconfigs from '../configs/api.json'
import { validateDefaultStringValue, validateEmail } from '../services/validators'
import '../assets/css/contact.css'
import Divider from '../components/Divider/Divider';
import phoneIcon from '../assets/img/icons8-phone-48.png';
import emailIcon from '../assets/img/icons8-email-48.png';
import instagramIcon from '../assets/img/icons8-instagram-48.png';
import youtubeIcon from '../assets/img/icons8-play-button-48.png';


/**
 * this is the Contact functional component. It renders a form that uses the google
 * captcha v2 to prevent the form submition from bots.
 * It calls the nodejs api with the form values to sent an email.
 * shows the api response when the form is submitted.
 * @author Omar Aljazairy
 * @version 1.0
 */

export const Contact = () => {
  var captcha = null // get a ref for the captch

  // form fields
  const [fields, setFields] = useState(
    {
      companyName: '',
      email: '',
      tel: '',
      // city: '',
      // totalCars: '',
      captcha: '',
      // street: '',
      // housenr: '',
      // postcode: '',
      message: ''
    }
  )

  // set the validation of the form fields.
  const [validFields, setValidFields] = useState(
    {
      companyNameIsValid: false,
      emailIsValid: false,
      // telIsValid: false,
      // cityIsValid: false,
      // totalCarsIsValid: false,
      captchaIsValid: false,
      // streetIsValid: false,
      // housenrIsValid: false,
      // postcodeIsValid: false,
      messageIsValid: false
    }
  )
  const [response, setResponse] = useState(null)

  /**
   * take the field object key and value as params.
   * update the fields objects state and validate it.
   * @param {string} field
   * @param {string} val
   */
  const setAndValidateForm = (field, val) => {
    // console.log('field: ', field, ' val: ', val)

    switch (field) {
      case 'companyName':
        setFields(prevState => ({ ...prevState, companyName: val }))
        setValidFields(prevState => ({ ...prevState, companyNameIsValid: validateDefaultStringValue(val) }))
        break
      // case 'tel':
      //   setFields(prevState => ({ ...prevState, tel: val }))
      //   setValidFields(prevState => ({ ...prevState, telIsValid: validateMobileno(val) }))
      //   break
      case 'email':
        setFields(prevState => ({ ...prevState, email: val }))
        setValidFields(prevState => ({ ...prevState, emailIsValid: validateEmail(val) }))
        break
      // case 'city':
      //   setFields(prevState => ({ ...prevState, city: val }))
      //   setValidFields(prevState => ({ ...prevState, cityIsValid: validateDefaultStringValue(val, 20) }))
      //   break
      // case 'totalCars':
      //   setFields(prevState => ({ ...prevState, totalCars: val }))
      //   setValidFields(prevState => ({ ...prevState, totalCarsIsValid: validateDefaultIntegerValue(val) }))
      //   break
      case 'captcha':
        setFields(prevState => ({ ...prevState, captcha: val }))
        setValidFields(prevState => ({ ...prevState, captchaIsValid: validateDefaultStringValue(val) }))
        break
      // case 'street':
      //     setFields(prevState => ({ ...prevState, street: val }))
      //     setValidFields(prevState => ({ ...prevState, streetIsValid: validateDefaultStringValue(val, 20) }))
      //     break
      // case 'housenr':
      //     setFields(prevState => ({ ...prevState, housenr: val }))
      //     setValidFields(prevState => ({ ...prevState, housenrIsValid: validateDefaultStringValue(val, 7) }))
      //     break
      // case 'postcode':
      //     setFields(prevState => ({ ...prevState, postcode: val }))
      //     setValidFields(prevState => ({ ...prevState, postcodeIsValid: validatePostcodeValue(val) }))
      //     break
      case 'message':
          setFields(prevState => ({ ...prevState, message: val }))
          setValidFields(prevState => ({ ...prevState, messageIsValid: validateDefaultStringValue(val, 900) }))
          break
      default:
        return 'unknown field name'
    }
  }

  /**
   * check if all the validFields are valid (true).
   * @return bool
   */
  const validateForm = () => {
    // console.log('captcha key: ', process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY)
    const isValid = Object.values(validFields).every((val) => (val === true))

    // console.log('fields from setAndValidate: ', fields)
    // console.log('fields from ValidFields: ', validFields)
    // console.log('isValid: ', isValid)
    return isValid
  }

  /**
   * set the captcha value. i created a seperate method here
   * because there are other actions need to be taken later.
   * @param {string} value - set the captcha string value
   */
  const onCaptchaChange = value => {
    // console.log('ReCAPTCHA: ', value)
    setAndValidateForm('captcha', (value || ''))
  }

  /**
   * takes the captcha ref as param and sets the
   * captcha variable with it. This will enable me
   * to perform any api call on the captcha.
   * @param {*} ref
   */
  const setCaptchaRef = (ref) => {
    if (ref) {
      captcha = ref
    }
  }

  /**
   * resets the fields, validFields and the captcha.
   */
  const resetForm = () => {
    // console.log('resetform called')
    setFields({
      companyName: '',
      email: '',
      // tel: '',
      // city: '',
      // totalCars: '',
      captcha: null,
      // street: '',
      // housenr: '',
      // postcode: '',
      message: ''
    })

    setValidFields({
      companyNameIsValid: false,
      emailIsValid: false,
      // telIsValid: false,
      // cityIsValid: false,
      // totalCarsIsValid: false,
      captchaIsValid: false,
      // streetIsValid: false,
      // housenrIsValid: false,
      // postcodeIsValid: false,
      messageIsValid: false
    })
    validateForm()
    captcha.reset()
  }

  /**
   * handles the form when submitted.
   * First check if all values are set, if all set, call the nodeapi
   * to send the form value to it's email api.
   * @param {*} event - submit event.
   */
  const handleSubmit = async event => {
    // console.log('submit pressed')
    const api = apiconfigs.mynodejs.api.mail.sendmail

    // create a copy of the fields object to delete it's captcha.
    const tempFields = fields
    delete tempFields.captcha
    axios.post(api, tempFields)
      .then(response => {
        console.log('response in contact: ', response)
        setResponse(response.data.message)
        resetForm()
      })
      .catch(error => {
        console.log('error: ', error)
        setResponse('An error occured')
      })
    event.preventDefault()
  }

  // dynamic styles for the text fields of the form
  const styles = {
    emailField: {
      background: validFields.emailIsValid ? 'lightgreen' : 'white'
    },
    companyNameField: {
      background: validFields.companyNameIsValid ? 'lightgreen' : 'white'
    },
    // telField: {
    //   background: validFields.telIsValid ? 'lightgreen' : 'white'
    // },
    // cityField: {
    //   backgroundColor: validFields.cityIsValid ? 'lightgreen' : 'white'
    // },
    // totalCarsField: {
    //   background: validFields.totalCarsIsValid ? 'lightgreen' : 'white'
    // },
    // streetField: {
    //   background: validFields.streetIsValid ? 'lightgreen' : 'white'
    // },
    // housenrField: {
    //   background: validFields.housenrIsValid ? 'lightgreen' : 'white'
    // },
    // postcodeField: {
    //   background: validFields.postcodeIsValid ? 'lightgreen' : 'white'
    // },
    messageField: {
      background: validFields.messageIsValid ? 'lightgreen' : 'white'
    },
    icon: {
      width: 48,
      height: 48
    }
  }

  const formFieldSize_m = 8
  const iconColSize = 1
  const infoColSize = 8

  return (
    <div className="container">
      <div className="form">
      <Row className="justify-content-md-center">
        <Col md={formFieldSize_m}>
          <h3>Contact & informatie</h3>
          <hr></hr>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Row className="justify-content-md-center">
          <Col md={formFieldSize_m}>
            <Form.Group controlId='company'>
              <Form.Label>Bedrijfnaam</Form.Label>
              <Form.Control type='text' placeholder='uw bedrijfnaam' name='companyName' value={fields.companyName} onChange={val => setAndValidateForm('companyName', val.target.value)} style={styles.companyNameField} />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center">
          <Col md={formFieldSize_m}>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='emailadres' name='email' value={fields.email} onChange={val => setAndValidateForm('email', val.target.value)} style={styles.emailField} />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center">
          <Col md={formFieldSize_m}>
            <Form.Group controlId='message'>
              <Form.Label>Bericht</Form.Label>
              <Form.Control as='textarea' rows='3' placeholder='bericht' name='berich' value={fields.message} onChange={val => setAndValidateForm('message', val.target.value)} style={styles.messageField} />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center">
          <Col md={formFieldSize_m}>
            <Form.Group controlId='captcha'>
              <ReCAPTCHA
                ref={(r) => setCaptchaRef(r)}
                sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
                value={fields.captcha}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center">
          <Col sm={4}>
            <Form.Group controlId='submit'>
              <Button variant='primary' type='submit' disabled={!validateForm()} block>
            Submit
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
      <h2>{response}</h2>
      </div>
      <div className="info">
      <Row className="info-row">
          <Col>
            <h3>Wij werken in heel Nederland!</h3>
            <hr></hr>
          </Col>
        </Row>
        <Row className="info-row">
          <Col sm={iconColSize} className="info-col-icon">
            <Image src={phoneIcon} style={styles.icon} roundedCircle />
          </Col>
          <Col sm={infoColSize} className="info-col-text">
            <a href="tel:+31634992739"><p>0634992739</p></a>
          </Col>
        </Row>
        <Row className="info-row">
          <Col sm={iconColSize} className="info-col-icon">
            <Image src={emailIcon} style={styles.icon} roundedCircle />
          </Col>
          <Col sm={infoColSize} className="info-col-text">
            <a href="mailto:info@wipecardetailing.nl"><p>info@wipecardetailing.nl</p></a>
          </Col>
        </Row>
        <Row className="info-row">
        <Col sm={iconColSize} className="info-col-icon">
            <Image src={instagramIcon} style={styles.icon} roundedCircle />
          </Col>
          <Col sm={infoColSize} className="info-col-text">
            <a href="https://www.instagram.com/wipecardetailing/?hl=en"><p>via Instagram</p></a>
          </Col>
        </Row>
        <Row className="info-row">
        <Col sm={iconColSize} className="info-col-icon">
            <Image src={youtubeIcon} style={styles.icon} roundedCircle />
          </Col>
          <Col sm={infoColSize} className="info-col-text">
            <a href="https://www.youtube.com/channel/UCZ6VItM3YRcFzoj3PXvGJBg"><p>via Youtube</p></a>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Divider />
          </Col>
        </Row>
        <Row className="info-bottom-text-row">
          <Col md='auto'>
            <h3>Openingstijden:</h3>
            <p>Dagelijks van 07:00 uur tot 22:00 uur</p>
           </Col>
        </Row>
      </div>
    </div>
  )
}
