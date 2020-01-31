import React, { Component } from 'react';

// import { ModalContainer, ModalRoute } from 'react-router-modal';
// import { Redirect } from 'react-router';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../UI/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp/HiddenMdUp';
// import MessageModal from './MessageModal/MessageModal';

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
            </>
        )
    }
}

export default Contact;