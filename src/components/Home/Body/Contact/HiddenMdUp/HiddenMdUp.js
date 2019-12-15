import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './HiddenMdUp.module.css';

const HiddenMdUp = () => (
        <Row className={classes.HiddenMdUp}>
            <Col xs="8" className={classes.SmSpace}>
                <Button href="tel:+15757428441" color="secondary" size="lg" block>
                    <FontAwesomeIcon icon={faPhoneSquare} style={{paddingRight: "3px"}}/>
                    Give Us A Call
                </Button>
            </Col>
            <Col xs="8" className={classes.SmSpace}>
                <Button color="success" size="lg" block>
                    <FontAwesomeIcon icon={faSms} style={{paddingRight: "3px"}}/>
                    Message Us
                </Button>
            </Col>
            <Col xs="8" className={classes.SmSpace}>
                <Button href="https://www.facebook.com/Those-Guys-Appliance-Repair-2000600620203240"
                    rel="noopener noreferrer" color="primary" size="lg" block
                >
                    <FontAwesomeIcon icon={faFacebookSquare} style={{paddingRight: "3px"}}/>
                    Facebook
                </Button>
            </Col>
        </Row>
);

export default HiddenMdUp;
