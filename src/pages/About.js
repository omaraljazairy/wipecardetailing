import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/css/styles.css'
import overons from '../assets/img/overons.jpeg'
import overons2 from '../assets/img/overons2.jpeg'
import overons3 from '../assets/img/overons3.jpeg'

export const About = () => {

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
  <Container fluid='lg'>
    <Row>
      <Col>
        <p>Wipe Car Detailing staat voor het professioneel onderhouden en schoonmaken van alle voertuigtypen. Door de combinatie van de juiste tools en onze affiniteit met auto’s zijn wij bereid uw voertuig te laten stralen en u een gevoel te geven dat u weer over een nieuwe auto beschikt.</p>      
      </Col>
    </Row>
    <Row>
      <Col>
        <p>Door het gebruik van een geavanceerd systeem waarmee wij, op basis van stoom met een bereik van 180 graden Celsius de voertuigen schoonmaken, kunnen wij zorgen voor een:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <ul>
          <li>Antibacteriële</li>
          <li>Antischimmel</li>
          <li>Milieuvriendelijke</li>
          <li>En een krasvrije en schadevrije behandeling</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col md={2.2} style={styles.imgColumn}>
        <Image src={overons} style={styles.image} alt="over ons"/>
      </Col>
      <Col md={2.2} style={styles.imgColumn}>
        <Image src={overons2} style={styles.image} alt="over ons 2"/>
      </Col>
      <Col md={2.2} style={styles.imgColumn}>
        <Image src={overons3} style={styles.image} alt="over ons 3"/>
      </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p>
          Ook voor het verwijderen van de haren van uw huisdieren hebben wij een oplossing en worden deze zonder extra kosten verwijderd.
          </p>
          <p>
          Onze mobiele service zorgt ervoor dat wij op elke locatie beschikbaar kunnen zijn en u van onze service kunnen voorzien. Door onze beschikbaarheid en flexibiliteit is geen locatie of tijdstip voor ons te gek. 
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
          Onder <Link to="/services">services</Link> vindt u onze prijzen en aanbod met betrekking tot het reinigen van u voertuig.
          Heeft u een wagenpark? Dan verwijzen wij u graag naar <Link to="/wagenpark">wagenpark</Link> waar u een offerte kunt aanvragen.
          </p>
        </Col>
      </Row>
  </Container>
  )
}
