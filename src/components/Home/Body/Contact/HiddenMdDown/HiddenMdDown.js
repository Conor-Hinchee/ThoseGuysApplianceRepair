import React from 'react';
import Link from  "gatsby-link";
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './HiddenMdDown.module.css';

const HiddenMdDown = () => (
        <Row className={classes.HiddenMdDown}>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button  href="tel:+15757428441" outline color="secondary" size="lg">
                    <FontAwesomeIcon icon={faPhoneSquare} style={{paddingRight: "3px"}}/>
                    Give Us A Call
                </Button>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Link
                    to="/repair/appliance-selector/"
                    state={{
                        modal: true,
                        noScroll: true
                    }}
                >
                    <Button outline color="success" size="lg">
                        <FontAwesomeIcon icon={faSms} style={{paddingRight: "3px"}}/>
                        Message Us
                    </Button>
                </Link>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button href="https://www.facebook.com/Those-Guys-Appliance-Repair-2000600620203240"
                    rel="noopener noreferrer"
                    target="_blank" outline color="primary" size="lg"
                >
                    <FontAwesomeIcon icon={faFacebookSquare} style={{paddingRight: "3px"}}/>
                    Facebook
                </Button>
            </Col>
        </Row>
);

export default HiddenMdDown;