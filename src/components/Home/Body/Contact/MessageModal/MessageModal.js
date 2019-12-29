import React, { Component } from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Helmet from 'react-helmet';
import AppliancePicker from './AppliancePicker/AppliancePicker';
import 'react-router-modal/css/react-router-modal.css';

class MessageModal extends Component {
  constructor(props) {
        super(props);
        
        this.handleApplianceOptionClick = this.handleApplianceOptionClick.bind(this);
  }
  

  handleApplianceOptionClick = (e) =>{
    alert(e.currentTarget.id);
  }

  render(){
    return(
         <Modal isOpen={this.props.toggle} toggle={this.props.toggle} >
          <Helmet title=" 💬 Message Us 😃" />
          <ModalHeader toggle={this.props.toggle}>{this.props.display}</ModalHeader>
        
           <AppliancePicker />
          
        </Modal>
    );
  }
  
} 

export default MessageModal;