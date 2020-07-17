import React from 'react';
import { Image } from 'react-bootstrap';
import '../../assets/css/socialmediaicons.css';
import phoneIcon from '../../assets/img/icons8-phone-48.png';
import emailIcon from '../../assets/img/icons8-email-48.png';
import instagramIcon from '../../assets/img/icons8-instagram-48.png';
import youtubeIcon from '../../assets/img/icons8-play-button-48.png';

const SocialMediaIcons = props => {
    
    const styles = {
        image: {
          width: 30,
          height: 30,
        //   verticalAlign: 'middle'
        }
    }

    return (
        <div className="follow-us-icons">
            <a href="tel:+31634992739"><Image src={phoneIcon} style={styles.image} alt="phone" roundedCircle/></a>
            <a href="mailto:info@wipecardetailing.nl"><Image src={emailIcon} style={styles.image} alt="email" roundedCircle/></a>
            <a href="https://www.instagram.com/wipecardetailing/?hl=en"><Image src={instagramIcon} style={styles.image} alt="instagram" roundedCircle /></a>
            <a href="https://www.youtube.com/channel/UCZ6VItM3YRcFzoj3PXvGJBg"><Image src={youtubeIcon} style={styles.image} alt="youtube" roundedCircle /></a>
        </div>
    );
};

export default SocialMediaIcons;
