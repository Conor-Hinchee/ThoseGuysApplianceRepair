import React from 'react';
// import { Link } from 'react-router-dom';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './HiddenMdUp.module.css';

const HiddenMdUp = (props, {match}) => (
        <Row className={classes.HiddenMdUp}>
            <Col xs="8" className="d-md-none" style={{marginTop:"3%"}}>
                <Button href="tel:+15757428441" color="secondary" size="lg" block>
                    <FontAwesomeIcon icon={faPhoneSquare} style={{paddingRight: "3px"}}/>
                    Give Us A Call
                </Button>
            </Col>
            <Col xs="8" className="d-md-none" style={{marginTop:"3%"}}>
                {/*<Link to={"/messageus/Appliance Picker"} >*/} 
                    <Button color="success" size="lg" block
                        onClick={props.toggle}
                     >
                        <FontAwesomeIcon icon={faSms} style={{paddingRight: "3px"}}/>
                        Message Us
                    </Button>
                {/*</Link>*/}
            </Col>
            <Col xs="8" className="d-md-none" style={{marginTop:"3%"}}>
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