import React, { Component } from 'react';
// import 'react-router-modal/css/react-router-modal.css';
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { Redirect } from 'react-router';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../UI/Typography/HeaderText/HeaderText';
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
            modalOpen: !prevState.modalOpen,
            display : "Appliance Picker"
        }));
    }
    
    onApplianceSelected = (id) =>{
        this.setState({
            applianceType: id,
            display: "Select Issue"
        });
    }
    
    onIssueSelected = id =>{
        this.setState({
            issue: id,
            display:"Contact Information"
        });
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
                {this.state.display === "Contact Information" && this.state.modalOpen &&(
                    <Redirect push to="/messageus/Contact%20Information" />    
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
                <HiddenMdUp 
                    toggle = {this.toggleModal}
                    display = {this.state.display}
                />
                
                <ModalRoute path='/messageus/Appliance Picker' parentPath='/'>
                    <MessageModal 
                        toggle = {this.toggleModal}
                        display = {"Appliance Picker"}
                        propagateApplianceClick = {this.onApplianceSelected}
                        appliance = {this.state.applianceType}
                        propagateIssueClick = {this.onIssueSelected}
                    />
                </ModalRoute>
                <ModalRoute path='/messageus/Select Issue' parentPath='/'>
                    <MessageModal 
                        toggle = {this.toggleModal}
                        display = {"Select Issue"}
                        propagateApplianceClick = {this.onApplianceSelected}
                        appliance = {this.state.applianceType}
                        propagateIssueClick = {this.onIssueSelected}
                    />
                </ModalRoute>
                <ModalRoute path='/messageus/Contact Information' parentPath='/'>
                    <MessageModal 
                        toggle = {this.toggleModal}
                        display = {"Contact Information"}
                        propagateApplianceClick = {this.onApplianceSelected}
                        appliance = {this.state.applianceType}
                        propagateIssueClick = {this.onIssueSelected}
                    />
                </ModalRoute>
                
                <ModalContainer />

            </>
        )
    }
}

export default Contact;
