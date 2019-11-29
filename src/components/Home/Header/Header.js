import React from 'react';
import { Row } from 'reactstrap';
import classes from './Header.module.css';
import ContactRow from './ContactRow/ContactRow';

const Header = () => (
    <header className={classes.Header}>
        <Row>
            <ContactRow />
        </Row>
    </header>
);

export default Header;
