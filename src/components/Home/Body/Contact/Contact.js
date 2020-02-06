import React from 'react';
import {Row, Col} from 'reactstrap';
import HeaderText from '../../../UI/HeaderText/HeaderText';
import HiddenMdDown from './HiddenMdDown/HiddenMdDown';
import HiddenMdUp from './HiddenMdUp/HiddenMdUp';

const Contact = () => {
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
            <HiddenMdDown />
            <HiddenMdUp />
        </>
    );
}

export default Contact;