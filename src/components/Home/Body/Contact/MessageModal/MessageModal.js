import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import {Modal, ModalHeader} from 'reactstrap';
import AppliancePicker from './AppliancePicker/AppliancePicker';

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
         <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
          <ModalHeader toggle={this.props.toggle}>{this.props.display}</ModalHeader>
          
          <Switch>
                  <Route 
                    path={"/appliancepicker"}
                    render={() => AppliancePicker} 
                    toggle = {this.toggleModal}
                    applianceOptionClick = {this.handleApplianceOptionClick}
                  />
              
          </Switch>
          
          
        </Modal>
    );
  }
  
} 

export default MessageModal;