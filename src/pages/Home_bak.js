import React, {useState} from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import express from '../assets/img/img1.jpg'
import premium from '../assets/img/img2.jpg'
import luxe from '../assets/img/img3.jpg'
import foo from '../assets/img/img4.jpg'

// import '../assets/css/styles.css'

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  const styles = {
    image: {
      width: width - 175,
      height: height - 200
    }
  }

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} >
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={express}
            thumbnail
            style={styles.image}
          />
          {/* <img 
            className="d-block w-100"
            src={express}
            style={styles.image}
            alt="First slide"
          /> */}
          <Carousel.Caption>
            <h3>{width} - {height}</h3>
            <p>Nice service i think wewewa and go to <Link to="/services">services</Link></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src={premium}
            style={styles.image}
            thumbnail
          />
          {/* <img
            // className="d-block w-100 imageCarousel"
            className="d-block w-100"
            src={premium}
            style={styles.image}
            alt="Second slide"
          /> */}
          <Carousel.Caption>
          <h3>{width} - {height}</h3>
            <p>Dr who</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={foo}
            style={styles.image}
            alt="Third slide"
          /> */}
          <Image
            className="d-block w-100"
            src={foo}
            thumbnail
            style={styles.image}
          />
          <Carousel.Caption>
            <h3>Game Of Thrones</h3>
            <h3>{width} - {height}</h3>
            <p>Dr House</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={luxe}
            style={styles.image}
            alt="Extra slide"
          /> */}
          <Image
            className="d-block w-100"
            src={luxe}
            thumbnail
            style={styles.image}
          />
          <Carousel.Caption>
            <h3>Something else</h3>
            <h3>{width} - {height}</h3>
            <p>
              I love it when a plan comes together
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
