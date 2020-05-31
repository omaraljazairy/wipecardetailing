import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/css/styles.css'

export const Layout = (props) => (
  <div className='body'>
    <Container>
      {props.children}
    </Container>
  </div>

)
