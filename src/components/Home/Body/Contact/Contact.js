import React from 'react';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp'/HiddenMdUp;

const Contact = () => (
    <>
        <Row>
        	<Col>
    	        <HeaderText 
    	            tag={2}
    	            text={'Contact Us'}
    	        />
        	</Col>
        </Row>
        <HiddenMdDown />
        <HiddenMdUp />
    </>
);

export default Contact;
