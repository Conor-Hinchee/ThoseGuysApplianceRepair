import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './Contact.module.css';
import HeaderText from '../../../Typography/HeaderText/HeaderText';

const Contact = () => (
    <>
        <Row>
        	<Col>
    	        <HeaderText 
    	            tag={2}
    	            text={'Contact Us'}
    	        />
        	</Col>
        </Row>
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
        <Row className={classes.HiddenMdUp}>
            <Col xs="8" className={classes.SmSpace}>
                <Button color="secondary" size="lg" block>
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
                <Button color="primary" size="lg" block>
                    <FontAwesomeIcon icon={faFacebookSquare} style={{paddingRight: "3px"}}/>
                    Facebook
                </Button>
            </Col>
        </Row>
    </>
);

export default Contact;
