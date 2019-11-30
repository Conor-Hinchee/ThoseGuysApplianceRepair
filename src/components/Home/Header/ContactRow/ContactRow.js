import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import classes from './ContactRow.module.css';


const Header = () => (
    <section style={{height:'25px',width: '100%'}}>
        <Col sm="12" className={classes.spaceAround}>
            <h6 className={classes.contactBarText}>
             <FontAwesomeIcon icon={faMapMarkedAlt} />
                <a className={classes.linkWhite} 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/2019+N+Thornton+St,+Clovis,+NM+88101/@34.4189473,-103.2160837,17z/data=!3m1!4b1!4m5!3m4!1s0x8702de64a27e8fe7:0xd93133652818f73b!8m2!3d34.4189473!4d-103.213895">
                    2019 Thornton Street, Clovis, NM 88101
                </a>
            </h6>
            <h6 className={classes.contactBarText}>
                <FontAwesomeIcon icon={faPhoneSquare} />
                <a className={classes.linkWhite} href="tel:+15757428441">(575) 742-8441</a>  
            </h6>
        </Col>
    </section>
);

export default Header;