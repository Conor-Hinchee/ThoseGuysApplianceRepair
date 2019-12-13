import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './HiddenMdDown.module.css';

const HiddenMdDown = () => (
        <Row className={classes.HiddenMdDown}>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button outline color="secondary" size="lg">
                    <FontAwesomeIcon icon={faPhoneSquare} style={{paddingRight: "3px"}}/>
                    Give Us A Call
                </Button>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button outline color="success" size="lg">
                    <FontAwesomeIcon icon={faSms} style={{paddingRight: "3px"}}/>
                    Message Us
                </Button>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button outline color="primary" size="lg">
                    <FontAwesomeIcon icon={faFacebookSquare} style={{paddingRight: "3px"}}/>
                    Facebook
                </Button>
            </Col>
        </Row>
);

export default HiddenMdDown;
