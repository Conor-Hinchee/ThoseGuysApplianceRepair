import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp/HiddenMdUp';
import Modal from './Modal/Modal';

class Contact extends Component { 
    constructor(props) {
        super(props);
        
        this.toggleModal = this.toggleModal.bind(this);
    }

    state = {
      modalOpen : false,
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
                <Modal 
                    toggle = {this.toggleModal}
                    modal = {this.state.modalOpen}
                />
            </>
        )
    }
}

export default Contact;
