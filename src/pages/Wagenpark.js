import React from 'react';
import { Container, Image } from 'react-bootstrap';
import CustomForm from '../components/Form/CustomForm';
import '../assets/css/wagenpark.css';
import wagenpark from '../assets/img/wagenpark.jpg';

export const Wagenpark = () => {

  const styles = {
    image: {
      width: 'auto',
      height: 300,
      maxWidth: '100%',
      maxHight: '100%',
      position: 'relative'
    },
  }

  return ( 
    <Container fluid className="container">
    <section className="content">
      <div className="content-text">
        <p>Wij worden graag uw partner in het reinigen van uw wagenpark!</p>
        <p>Vraag nu onze offerte aan:</p>
        <ul>
          <li>Service op locatie</li>
          <li>Flexibiliteit in tijden en locaties</li>
          <li>Milieuvriendelijke en duurzame werkwijze</li>
          <li>Flexibel en bespreekbare prijzen</li>
          <li>Topkwaliteit en hoogwaardig service</li>
        </ul>
      </div>
      <div className="content-img">
        <Image src={wagenpark} style={styles.image} fluid />
      </div>
    </section>
    <section className="form">
      <CustomForm />
    </section>
  </Container>

  
  )
}


/**
 *   <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={6}>
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
          <Divider />
        </Col>
      </Row>
    </Container>
 * 
 * 
 */