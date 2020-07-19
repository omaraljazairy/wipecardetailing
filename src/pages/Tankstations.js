import React from 'react'
import { Container , Row, Col, Image } from 'react-bootstrap'
import '../assets/css/tankstations.css'
import Divider from '../components/Divider/Divider';
import tankstations from '../assets/img/tankstations.jpg'
import CustomForm from '../components/Form/CustomForm';

export const Tankstations = () => {

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
    <Container fluid="xl">
      <Row className="justify-content-md-center">
        <Col md={8}>
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
        <Col md={4} style={styles.imgColumn}>
          <Image src={tankstations} style={styles.image} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Divider />
        </Col>
      </Row>
      <CustomForm />
    </Container>
  )
}
