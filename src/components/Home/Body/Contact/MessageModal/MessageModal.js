import React, { Component } from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Helmet from 'react-helmet';
import AppliancePicker from './AppliancePicker/AppliancePicker';
import IssueDropDown from './IssueDropDown/IssueDropDown';

class MessageModal extends Component {
  constructor(props) {
        super(props);
        this.handleApplianceOptionClick = this.handleApplianceOptionClick.bind(this);
        this.handleIssueOptionClick = this.handleIssueOptionClick.bind(this);
  }
  

  handleApplianceOptionClick = (e) =>{
    this.props.propogateApplianceClick(e.currentTarget.id);
  }
  
  handleIssueOptionClick = (id) =>{
    this.props.propogateIssueClick(id);
  }
  

  render(){
    return(
         <Modal isOpen={this.props.toggle} toggle={this.props.toggle} >
          <Helmet title=" 💬 Message Us 😃" />
          <ModalHeader toggle={this.props.toggle}>{this.props.display}</ModalHeader>
        
            {this.props.display === "Appliance Picker" &&
              <AppliancePicker 
                applianceOptionClick = {this.handleApplianceOptionClick}
              />
            }
           {this.props.display === "Select Issue" &&
              <IssueDropDown 
                applianceSelected = {this.props.appliance}
                handleIssueOptionClick = {this.handleIssueOptionClick}
              />
           }
          
        </Modal>
    );
  }
  
} 

export default MessageModal;