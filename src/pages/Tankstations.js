import React from 'react'
import { Container , Image } from 'react-bootstrap'
import '../assets/css/tankstations.css'
import tankstations from '../assets/img/tankstations.jpg'
import CustomForm from '../components/Form/CustomForm';

export const Tankstations = () => {
 
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
        </div>
        <div className="content-img">
          <Image src={tankstations} style={styles.image} fluid />
        </div>
      </section>
      <section className="form">
        <CustomForm />
      </section>
    </Container>
  )
}
