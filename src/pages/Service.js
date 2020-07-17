import React from 'react'
import { Container, Card, Accordion, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/css/services.css'
import overons from '../assets/img/overons.jpeg'

export const Service = () => {
  
  const screenWidth = window.innerWidth;
  const styles = {
    header: {
      background: '#1451BF',
      textAlign: 'center',
      color: 'white'
    },
    image: {
      width: 350,
      height: 300,
      maxWidth: screenWidth - 30
    },
    column: {
      paddingLeft: 15,
      paddingRight: 1,
      paddingBottom: 15      // boxShadow: '5px 7px #888888'
    },
  }

  return (
    <Container fluid>
      <p>Door onze flexibiliteit en bereikbaarheid kunnen wij uw voertuig van onze service voorzien waar u kan en wanneer u kan.</p>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} style={styles.header} eventKey="0">
          <b>Basic</b> pakket interieur €75,-
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row className="justify-content-md-center">
                <Col md='auto' style={styles.column}>
                  <Card.Text>
                    <ul>
                      <li>Stofzuigen interieur</li>
                      <li>Stomen interieur</li>
                      <li>Ruiten reinigen</li>
                      <li>Dashboard reinigen</li>
                      <li>Zitplaatsen reinigen</li>
                      <li>Antibacterieel + Antischimmel</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col md={2.2} style={styles.column}>
                  <Image src={overons} style={styles.image} alt="over ons"/>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} style={styles.header} eventKey="1">
          <b>Basic</b> pakket exterieur €95,-
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col md='auto'  style={styles.column}>
                <Card.Text>
                  <ul>
                    <li>Stomen exterieur</li>
                    <li>Velgen reinigen</li>
                    <li>Banden reinigen</li>
                    <li>Wax laag aanbrengen</li>
                    <li>Ruiten reinigen</li>
                  </ul>
                </Card.Text>
              </Col>
              <Col md={2.2} style={styles.column}>
                <Image src={overons} style={styles.image} alt="over ons"/>
               </Col>
             </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} style={styles.header} eventKey="2">
          <b>Deluxe</b> pakket interieur €100,-
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col md='auto' style={styles.column}>
                <Card.Text>
                  <ul>
                    <li>Stofzuigen interieur</li>
                    <li>Ruiten reinigen (binnen en buiten)</li>
                    <li>Stomen interieur</li>
                    <li>Zitplaatsen reinigen</li>
                    <li>Dakhemel reinigen</li>
                    <li>Dashboard reinigen</li>
                    <li>Geurbehandeling</li>
                    <li>Antibacterieel + Antischimmel</li>
                  </ul>
                </Card.Text>
               </Col>
               <Col md={2.2} style={styles.column}>
                <Image src={overons} style={styles.image} alt="over ons"/>
               </Col>
             </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} style={styles.header} eventKey="3">
          <b>Deluxe</b> pakket exterieur €120,-
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col md='auto' style={styles.column}>
                <Card.Text>
                  <ul>
                    <li>Stomen exterieur</li>
                    <li>Velgen reinigen</li>
                    <li>Banden reinigen</li>
                    <li>Wax laag aanbrengen</li>
                    <li>Ruiten reinigen</li>
                    <li>Polijsten koplampen</li>
                    <li>Motorkap reiniging</li>
                    <li>Polijsten geheel voertuig</li>
                  </ul>
                </Card.Text>
              </Col>
              <Col md={2.2} style={styles.column}>
                <Image src={overons} style={styles.image} alt="over ons"/>
               </Col>
             </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} style={styles.header} eventKey="4">
          <b>Premium </b> pakket interieur en exterieur €250,-
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col md='auto' style={styles.column}>
                <Card.Text>
                  <ul>
                    <li>Stofzuigen interieur</li>
                    <li>Ruiten reinigen (binnen en buiten)</li>
                    <li>Stomen interieur</li>
                    <li>Zitplaatsen reinigen</li>
                    <li>Dakhemel reinigen</li>
                    <li>Dashboard reinigen</li>
                    <li>Geurbehandeling</li>
                    <li>Antibacterieel + Antischimmel</li>
                    <li>Stomen exterieur</li>
                    <li>Velgen reinigen</li>
                    <li>Banden reinigen</li>
                    <li>Wax laag aanbrengen</li>
                    <li>Ruiten reinigen</li>
                    <li>Polijsten koplampen</li>
                    <li>Motorkap reiniging</li>
                    <li>Polijsten geheel voertuig</li>
                  </ul>
                </Card.Text>
              </Col>
              <Col md={2.2} style={styles.column}>
                <Image src={overons} style={styles.image} alt="over ons"/>
               </Col>
             </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <p>Alle prijzen zijn incl. BTW.
      Bovenstaande pakketten zijn ook beschikbaar in een vorm van een abonnement. Voor meer informatie neemt u <Link to="/contact"> contact</Link>  met ons op.
      </p>
    </Container>
  )
}
