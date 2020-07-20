import React, {useState} from 'react';
import { validateDefaultStringValue, validateEmail, validatePostcodeValue, validateMobileno } from '../../services/validators'
import axios from '../../axios';
import apiconfigs from '../../configs/api.json'
import { Form, Col, Row, Button } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import '../../assets/css/customform.css';

const CustomForm = props => {
    var captcha = null // get a ref for the captch

    // form fields
    const [fields, setFields] = useState(
      {
        companyName: '',
        email: '',
        tel: '',
        city: '',
        captcha: '',
        street: '',
        housenr: '',
        postcode: '',
        message: ''
      }
    )
  
    // set the validation of the form fields.
    const [validFields, setValidFields] = useState(
      {
        companyNameIsValid: false,
        emailIsValid: false,
        telIsValid: false,
        cityIsValid: false,
        captchaIsValid: false,
        streetIsValid: false,
        housenrIsValid: false,
        postcodeIsValid: false,
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
        case 'tel':
          setFields(prevState => ({ ...prevState, tel: val }))
          setValidFields(prevState => ({ ...prevState, telIsValid: validateMobileno(val) }))
          break
        case 'email':
          setFields(prevState => ({ ...prevState, email: val }))
          setValidFields(prevState => ({ ...prevState, emailIsValid: validateEmail(val) }))
          break
        case 'city':
          setFields(prevState => ({ ...prevState, city: val }))
          setValidFields(prevState => ({ ...prevState, cityIsValid: validateDefaultStringValue(val, 20) }))
          break
        case 'captcha':
          setFields(prevState => ({ ...prevState, captcha: val }))
          setValidFields(prevState => ({ ...prevState, captchaIsValid: validateDefaultStringValue(val) }))
          break
        case 'street':
            setFields(prevState => ({ ...prevState, street: val }))
            setValidFields(prevState => ({ ...prevState, streetIsValid: validateDefaultStringValue(val, 20) }))
            break
        case 'housenr':
            setFields(prevState => ({ ...prevState, housenr: val }))
            setValidFields(prevState => ({ ...prevState, housenrIsValid: validateDefaultStringValue(val, 7) }))
            break
        case 'postcode':
            setFields(prevState => ({ ...prevState, postcode: val }))
            setValidFields(prevState => ({ ...prevState, postcodeIsValid: validatePostcodeValue(val) }))
            break
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

      const isValid = Object.values(validFields).every((val) => (val === true))
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
        tel: '',
        city: '',
        captcha: null,
        street: '',
        housenr: '',
        postcode: '',
        message: ''
      })
  
      setValidFields({
        companyNameIsValid: false,
        emailIsValid: false,
        telIsValid: false,
        cityIsValid: false,
        captchaIsValid: false,
        streetIsValid: false,
        housenrIsValid: false,
        postcodeIsValid: false,
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
      telField: {
        background: validFields.telIsValid ? 'lightgreen' : 'white'
      },
      cityField: {
        backgroundColor: validFields.cityIsValid ? 'lightgreen' : 'white'
      },
      streetField: {
        background: validFields.streetIsValid ? 'lightgreen' : 'white'
      },
      housenrField: {
        background: validFields.housenrIsValid ? 'lightgreen' : 'white'
      },
      postcodeField: {
        background: validFields.postcodeIsValid ? 'lightgreen' : 'white'
      },
      messageField: {
        background: validFields.messageIsValid ? 'lightgreen' : 'white'
      },
      icon: {
        width: 48,
        height: 48
      }
    }
  
    const formFieldSize_m = 8
    const formFieldSize_s = 4
    
    return (
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
                <Form.Label>Bedrijfsnaam</Form.Label>
                <Form.Control type='text' placeholder='Bedrijfsnaam' name='companyName' value={fields.companyName} onChange={val => setAndValidateForm('companyName', val.target.value)} style={styles.companyNameField} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={formFieldSize_m}>
              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Emailadres' name='email' value={fields.email} onChange={val => setAndValidateForm('email', val.target.value)} style={styles.emailField} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={formFieldSize_m}>
              <Form.Group controlId='tel'>
                <Form.Label>Telefoonnummer</Form.Label>
                <Form.Control type='tel' placeholder='Telefoonnummer' name='tel' value={fields.tel} onChange={val => setAndValidateForm('tel', val.target.value)} style={styles.telField} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={formFieldSize_m}>
              <Form.Group controlId='street'>
                <Form.Label>Straatnaam</Form.Label>
                <Form.Control type='text' placeholder='Straatnaam' name='street' value={fields.street} onChange={val => setAndValidateForm('street', val.target.value)} style={styles.streetField} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={formFieldSize_s}>
              <Form.Group controlId='housenr'>
                <Form.Label>Huisnummer</Form.Label>
                <Form.Control type='text' placeholder='Huisnummer' name='housenr' value={fields.housenr} onChange={val => setAndValidateForm('housenr', val.target.value)} style={styles.housenrField} />
              </Form.Group>
            </Col>
            <Col md={formFieldSize_s}>
              <Form.Group controlId='postcode'>
                <Form.Label>Postcode</Form.Label>
                <Form.Control type='text' placeholder='Postcode' name='postcode' value={fields.postcode} onChange={val => setAndValidateForm('postcode', val.target.value)} style={styles.postcodeField} />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Col md={formFieldSize_m}>
              <Form.Group controlId='city'>
                <Form.Label>Stad</Form.Label>
                <Form.Control type='text' placeholder='Stad' name='city' value={fields.city} onChange={val => setAndValidateForm('city', val.target.value)} style={styles.cityField} />
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
    );
};

export default CustomForm;