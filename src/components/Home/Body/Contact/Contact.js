import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp/HiddenMdUp';
import MessageModal from './MessageModal/MessageModal';

class Contact extends Component { 
    constructor(props) {
        super(props);
        
        this.toggleModal = this.toggleModal.bind(this);
    }

    state = {
      modalOpen : false,
      display : "appliance picker",
    };
    
    
    toggleModal = () =>{
         this.setState(prevState => ({
            modalOpen: !prevState.modalOpen
        }));
    }
    
    
    render(){
        return(
             <>
                <Row>
                	<Col>
            	        <HeaderText 
            	            tag={2}
            	            text={'Contact Us'}
            	        />
                	</Col>
                </Row>
                <HiddenMdDown 
                    toggle = {this.toggleModal}
                />
                <HiddenMdUp />
                <MessageModal 
                    toggle = {this.toggleModal}
                    modal = {this.state.modalOpen}
                    display = {this.state.display}
                />
            </>
        )
    }
}

export default Contact;
