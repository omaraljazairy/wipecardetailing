import React from 'react'
import { Container } from 'react-bootstrap'

export const Home = () => {
  const styles = {
    header: {
      fontFamily: 'Serif',
      color: '#000000',
      fontWeight: 'bold',
      paddingBottom: '30px'
    },
    content: {
      fontFamily: 'Serif',
      fontWeight: 'normal',
      boxShadow: '5px 5px 5px 1px',
      marginBottom: '30px'
    }
  }

  return (
    <Container>
      <div style={styles.header}>
        Title van Home pagina hier
        -- We zijn Auto Schoonmaken heel goed prima uitstekend. --
      </div>
      <div style={styles.content}>
        Content van Home pagina hier
        -- We werken met goed tools zoals hammers van horenbach. --
      </div>
      <div style={styles.content}>
        Nog meer Content van Home pagina hier
        -- We auto niet stuk maken mooi eruit zien prachtig allemachtig. --
      </div>
    </Container>
  )
}
