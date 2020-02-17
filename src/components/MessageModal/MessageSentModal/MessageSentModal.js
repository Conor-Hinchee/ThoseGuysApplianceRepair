import React, {useState, useEffect} from 'react';
import {Modal, ModalHeader, ModalBody, Container, Row, Button, Col} from 'reactstrap';

const MessageSentModal = (props) => {

    const closeBtn = <Link to="/"><button className="close" onClick ={props.clearState}>&times;</button></Link>;
    
	return(
	    <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>🙌  Message Sent 💖</ModalHeader>
    		    <ModalBody>
    			    <Container>
    				    
    			    </Container>
    		    </ModalBody>
		    </Modal>
	);
};

export default MessageSentModal;
