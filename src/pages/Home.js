import React from 'react'
import { Container, ResponsiveEmbed} from 'react-bootstrap'
import Iconlist from '../components/IconList/Iconlist'
import bioecology from '../assets/img/bio-ecology-leaf.png'
import maptopoint from '../assets/img/map-point-logo-icon.jpg'
import cardealership from '../assets/img/car-dealership.jpg'
import fillingstationfuel from '../assets/img/filling-station-fuel.jpg'

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

  const styles = {
    embededVideo: {
      width: 'auto',
      height: 'auto',
    },
  }

  return (
    <Container>
      <div style={styles.embededVideo}>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed src="https://www.youtube.com/embed/2T2ViapKakc?autoplay=0" />
        </ResponsiveEmbed>
      </div>
      <div className="home-links">
        <Iconlist data={IconlistData}
      />
      </div>
    </Container>
  )
}