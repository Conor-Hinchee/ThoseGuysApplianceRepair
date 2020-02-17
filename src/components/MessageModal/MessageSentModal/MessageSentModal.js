import React from 'react';
import {Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import { Link } from 'gatsby-plugin-modal-routing';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./MessageSentModal.module.css";


const MessageSentModal = (props) => {

    const closeBtn = <Link to="/"><button className="close" onClick ={props.clearState}>&times;</button></Link>;
    
    
    
    const mountainTimeZoneVal = new Date().toLocaleString('en-US',{timeZone:'America/Denver'});
    const mountainDateObj = new Date(mountainTimeZoneVal);
    const day = mountainDateObj.getDay();
    const hour = mountainDateObj.getHours();
    let text = "";
     
    if(day>5||day===0||hour<7||hour>19){
        text = (<h1 className="text-center">We will contact you at our next available office hour thank you for your patience!</h1>);
    }else{
        text = (<h1 className="text-center">Thank You ! We will be contacting you with an appointment shortly!</h1>);
    }
    
    
    
	return(
	    <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>
                <span role="img" aria-label="Raising Hands" aria-hidden="false">🙌</span>  
                    Message Sent 
                <span role="img" aria-label="Raising Hands" aria-hidden="false">💖</span>
            </ModalHeader>
		    <ModalBody>
			    <Container>
			        {text}
			        <div className={classes.confetti}>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                          <div className={classes.confettiPiece}></div>
                    </div>  
				    
			    </Container>
		    </ModalBody>
		 </Modal>
	);
};

MessageSentModal.propTypes = {
    clearState: PropTypes.func.isRequired
 };
  

  const mapDispatchToProps = dispatch => {
    return { clearState: () => dispatch({type: `CLEAR_STATE`})
    };
  };
  

export default connect(null, mapDispatchToProps)(MessageSentModal);
