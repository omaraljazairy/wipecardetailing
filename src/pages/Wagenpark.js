import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import '../assets/css/wagenpark.css'
import wagenpark from '../assets/img/wagenpark.jpg'

export const Wagenpark = () => {

  const screenWidth = window.innerWidth;

  const styles = {
    image: {
      width: 350,
      height: 300,
      maxWidth: screenWidth - 30
    },
    imgColumn: {
      paddingLeft: 15,
      paddingRight: 1,
      paddingBottom: 15
    }
  }

  return ( 
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <p>Wij worden graag uw partner in het reinigen van uw wagenpark!</p>
          <p>Vraag nu onze offerte aan:</p>
          <ul>
            <li>Service op locatie</li>
            <li>Flexibiliteit in tijden en locaties</li>
            <li>Milieuvriendelijke en duurzame werkwijze</li>
            <li>Flexibel en bespreekbare prijzen</li>
            <li>Topkwaliteit en hoogwaardig service</li>
          </ul>
        </Col>
        <Col md={4} style={styles.imgColumn}>
          <Image src={wagenpark} style={styles.image} alt="wagenpark" />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="hr-style"></hr>
        </Col>
      </Row>
    </Container>
  )
}


/**
 *
 * 
 * 
 */