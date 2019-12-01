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
                    <FontAwesomeIcon icon={faPhoneSquare} />
                    Give Us A Call
                </Button>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button outline color="success" size="lg">
                    <FontAwesomeIcon icon={faSms} />
                    Message Us
                </Button>
            </Col>
            <Col md="4" className={classes.JustifyContentCenter}>
                <Button outline color="primary" size="lg">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    Facebook
                </Button>
            </Col>
        </Row>
        <Row className={classes.HiddenMdUp}>
            <Col xs="8" className={classes.SmSpace}>
                <Button color="secondary" size="lg" block>
                    <FontAwesomeIcon icon={faPhoneSquare} />
                    Give Us A Call
                </Button>
            </Col>
            <Col xs="8" className={classes.SmSpace}>
                <Button color="success" size="lg" block>
                    <FontAwesomeIcon icon={faSms} />
                    Message Us
                </Button>
            </Col>
            <Col xs="8" className={classes.SmSpace}>
                <Button color="primary" size="lg" block>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    Facebook
                </Button>
            </Col>
        </Row>
    </>
);

export default Contact;
