import React from 'react'
import { Container , Row, Col, Image } from 'react-bootstrap'
import '../assets/css/styles.css'
import tankstations from '../assets/img/tankstations.jpg'

export const Tankstations = () => {

  // const width = window.innerWidth;
  const height = window.innerHeight;

  const styles = {
    image: {
      width: '100%',
      height: height - 560
    }
  }

  return ( 
    <Container fluid="xl">
      <Row>
        <Col>
          <p>
          Met onze milieuvriendelijke en duurzame reinigingssysteem reinigen wij uw tankstation.
          <br></br>Onze hogedruk stoomreinigingssysteem zorgt voor een antibacterieel en antischimmel werking en verwijdert met behulp van additieven vaste stoffen en ingewerkte vloeibare stoffen.
          </p>
          <p>
          Wij werken graag samen met u en helpen u graag in het behouden van een schoon en glanzende tankstation!
          </p>
          <p>De volgende werkzaamheden zullen worden uitgevoerd om uw tankstation te reinigen:</p>
          <ul>
            <li>Pompen reiniging (inclusief slang en handvat)</li>
            <li>Vloer reinigen en vlekken verwijderen</li>
            <li>Dak pompstation reinigen</li>
            <li>Wasstraat en/of wasbox reinigen</li>
            <li>Ramen reinigen</li>
            <li>Prijsbord reinigen</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={tankstations} style={styles.image} />
        </Col>
      </Row>
    </Container>
  )
}
