import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';
import '../../assets/css/iconlist.css';

const Iconlist = props => {

    const styles = {
        image: {
          width: 55,
          height: 55,
          verticalAlign: 'middle'
        },
        iconTitle: {
          display: 'inline',
          fontSize: 22,
          padding: '15px',
          alignText: 'center',
          color: '#13178C'
        },
        paragraph: {
          color: '#13178C',
          fontSize: 15,
        }
      }
    
    return (
      <div>
        {props.data.map((obj, id) => (
          <div key={id}>            
            <Row className="justify-content-md-center">
              <Col md='auto'>
                <Image src={obj.icon} style={styles.image} roundedCircle />
                <p style={styles.iconTitle}>{obj.title}</p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md='auto'>
                <p style={styles.paragraph}>{obj.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Divider />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
};

Iconlist.propTypes = {
    data: PropTypes.array.isRequired
}

export default Iconlist;