import React from 'react';
import { Container, ResponsiveEmbed, Row, Col} from 'react-bootstrap';
import Iconlist from '../components/IconList/Iconlist';
import bioecology from '../assets/img/bio-ecology-leaf.png';
import maptopoint from '../assets/img/map-point-logo-icon.jpg';
import cardealership from '../assets/img/car-dealership.jpg';
import fillingstationfuel from '../assets/img/filling-station-fuel.jpg';
import '../assets/css/home.css';

export const Home = () => {

  const IconlistData = [
    {
      icon: fillingstationfuel,
      title:"Tankstations",
      description: "Milieuvriendelijk: Systematisch schoonmaak waarbij waterbesparende technieken worden toegepast."
    },
    {
      icon: bioecology,
      title: "Milieuvriendelijk",
      description: "Systematisch schoonmaak waarbij waterbesparende technieken worden toegepast."
    },
    {
      icon: maptopoint,
      title: "Op locatie",
      description: "Door onze flexibiliteit komen onze professionals naar u toe."
    },
    {
      icon: cardealership,
      title: "Voertuigcategorieën",
      description: "Alle categorieën van toepassing."
    }
  ]

  return (
    <Container fluid>
      <Row className="justify-content-md-center embed-row">
        <Col md={8}>
          <ResponsiveEmbed aspectRatio="16by9">
            <embed src="https://www.youtube.com/embed/2T2ViapKakc?autoplay=0" />
          </ResponsiveEmbed>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Iconlist data={IconlistData} />
        </Col>
      </Row>
    </Container>
  )
}