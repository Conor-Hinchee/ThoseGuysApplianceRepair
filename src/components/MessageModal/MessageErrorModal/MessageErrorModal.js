import React from 'react';
import {Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import { Link } from 'gatsby-plugin-modal-routing';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./MessageErrorModal.module.css";


const MessageErrorModal = (props) => {

    const closeBtn = <Link to="/"><button className="close" onClick ={props.clearState}>&times;</button></Link>;
    
	return(
	    <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>
                <span role="img" aria-label="Socks" aria-hidden="false">🧦</span>  
                    Lost Socks
                <span role="img" aria-label="Socks" aria-hidden="false">🧦</span>
            </ModalHeader>
		    <ModalBody>
			    <Container >
                    <h1 className="text-center">There was an issue with sending your message,</h1>
                    <h5 className="text-center">Looks like you should give us a call instead.</h5>
                    <div className={classes.MessageError}></div>
			    </Container>
		    </ModalBody>
		 </Modal>
	);
};

MessageErrorModal.propTypes = {
    clearState: PropTypes.func.isRequired
 };
  

  const mapDispatchToProps = dispatch => {
    return { clearState: () => dispatch({type: `CLEAR_STATE`})
    };
  };
  

export default connect(null, mapDispatchToProps)(MessageErrorModal);
