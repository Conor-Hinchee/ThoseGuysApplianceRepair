import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Helmet from 'react-helmet';
import ContactInfoForm from './ContactInfoForm/ContactInfoForm';

const UsedApplianceModal = (props) => {
//   constructor(props) {
//         super(props);
//         this.handleApplianceOptionClick = this.handleApplianceOptionClick.bind(this);
//         this.handleIssueOptionClick = this.handleIssueOptionClick.bind(this);
//   }
  
//   handleApplianceOptionClick = (e) =>{
//     this.props.propagateApplianceClick(e.currentTarget.id);
//   }
  
//   handleIssueOptionClick = (id) =>{
//     this.props.propagateIssueClick(id);
//   }

    return(
          <Modal isOpen={props.toggle} 
              toggle={props.toggle} 
          >
            <Helmet title=" 💬 Message Us 😃" />
            <ModalHeader toggle={props.toggle}>{props.display}</ModalHeader>
                {props.display === "recycle_my_appliance" &&
                    <ContactInfoForm />
                }
          </Modal>
    );
    
} 

export default UsedApplianceModal;