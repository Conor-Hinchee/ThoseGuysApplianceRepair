import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import Helmet from 'react-helmet';
import ContactInfoForm from './ContactInfoForm/ContactInfoForm';
import AppliancePicker from './AppliancePicker/AppliancePicker';

const UsedApplianceModal = (props) => {

    return(
          <Modal isOpen={props.toggle} 
              toggle={props.toggle} 
          >
            <Helmet title=" 💬 Message Us 😃" />
            <ModalHeader toggle={props.toggle}>{(props.display).replace(/_/g, " ")}</ModalHeader>
                {(props.display === "Recycle_My_Appliance" 
                    || props.display === "Refinish_My_Appliance") && (
                        <ContactInfoForm />
                    )
                }
                {props.display === "Purchase_An_Appliance" && 
                    <AppliancePicker />
                }
          </Modal>
    );
    
} 

export default UsedApplianceModal;