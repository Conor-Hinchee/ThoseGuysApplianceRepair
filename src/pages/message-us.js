import React  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link} from "gatsby"
import SEO from "../components/seo"
// import MessageModal from "../components/MessageModal/MessageModal";

const MessageUs = (props) => {
   
    return(
        <>
        <SEO title="dhdhdjhdjhdkjhdkjh" />
            <Modal isOpen={true} >
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
            <Link
	    	    to="/usedappliances/"
		    >   
              <Button color="primary" >Do Something</Button>{' '}
            </Link>  
              <Button color="secondary" >Cancel</Button>
            </ModalFooter>
          </Modal>
        </>    
    );
   
}

export default MessageUs;
