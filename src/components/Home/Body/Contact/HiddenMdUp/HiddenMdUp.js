import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare, faSms  } from '@fortawesome/free-solid-svg-icons';
import classes from './HiddenMdUp.module.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {navigate} from 'gatsby';

const HiddenMdUp = (props) => {
    
    const propagateModalType = () =>{
        props.addMessageType("repair");
        
        navigate(
        "/repair/appliance-selector/",
            {
                state: { modal: true,
                        noScroll: true}
            }
        );
    };
    
    return(
         <Row className={classes.HiddenMdUp}>
            <Col xs="8" className="d-md-none" style={{marginTop:"3%"}}>
                <Button href="tel:+15757428441" color="secondary" size="lg" block>
                    <FontAwesomeIcon icon={faPhoneSquare} style={{paddingRight: "3px"}}/>
                    Give Us A Call
                </Button>
            </Col>
            <Col xs="8" className="d-md-none" style={{marginTop:"3%"}}>
                
                <Button color="success" size="lg" block onClick={propagateModalType}>
                    <FontAwesomeIcon icon={faSms} style={{paddingRight: "3px"}}/>
                    Message Us
                </Button>
                
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
};

HiddenMdUp.propTypes = {
    addMessageType: PropTypes.func.isRequired,
};
	  
const mapDispatchToProps = dispatch => {
    return { addMessageType: (messageType) => dispatch({type: `ADD_MESSAGE_TYPE`, payload: messageType })
    };
};
	  
export default connect(null, mapDispatchToProps)(HiddenMdUp);
