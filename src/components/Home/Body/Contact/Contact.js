import React, { Component } from 'react';
// import 'react-router-modal/css/react-router-modal.css';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Redirect } from 'react-router';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp/HiddenMdUp';
import MessageModal from './MessageModal/MessageModal';

class Contact extends Component { 
    constructor(props) {
        super(props);
        
        this.toggleModal = this.toggleModal.bind(this);
        this.onApplianceSelected = this.onApplianceSelected.bind(this);
        this.onIssueSelected = this.onIssueSelected.bind(this);
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
        this.setState({
            applianceType: id,
            display: "Select Issue"
        });
    }
    
    onIssueSelected = id =>{
        alert(id + " ewsasds")
    }
    
    render(){
        return(
            <>
                {!this.state.modalOpen && (
                    <Redirect push to="/" />    
                )}
                {this.state.display === "Appliance Picker" && this.state.modalOpen &&(
                    <Redirect push to="/messageus/Appliance%20Picker" />    
                )}
                {this.state.display === "Select Issue" && this.state.modalOpen &&(
                    <Redirect push to="/messageus/Select%20Issue" />    
                )}
                
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
                    display = {this.state.display}
                />
                <HiddenMdUp />
                
                <ModalRoute path='/messageus/:display' parentPath='/'>
                    <MessageModal 
                        toggle = {this.toggleModal}
                        display = {this.state.display}
                        propogateApplianceClick = {this.onApplianceSelected}
                        appliance = {this.state.applianceType}
                        propogateIssueClick = {this.onIssueSelected}
                    />
                </ModalRoute>
                
                <ModalContainer />
                

                
            </>
        )
    }
}

export default Contact;
