import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import '../assets/css/wagenpark.css';

export const Media = props => {


    return (
        <Container>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="socialmedia" title="SocialaMedia">
            </Tab>
            <Tab eventKey="profile" title="Photos">
            </Tab>
            <Tab eventKey="contact" title="Videos">
            </Tab>
          </Tabs>
        </Container>
    );
};