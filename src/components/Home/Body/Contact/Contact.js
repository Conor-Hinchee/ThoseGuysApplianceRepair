import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
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
      display : "Appliance Picker",
    };
    
    
    toggleModal = () =>{
         this.setState(prevState => ({
            modalOpen: !prevState.modalOpen
        }));
    }
    
    onApplianceSelected = (id) =>{
        alert(id);
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
                
                <MessageModal />
                
            </>
        )
    }
}

export default Contact;
