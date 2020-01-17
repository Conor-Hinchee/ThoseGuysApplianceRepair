import React from 'react';
import classes from './Header.module.css';
import ContactRow from './ContactRow/ContactRow';
import Hero from './Hero/Hero';

const Header = () => (
    <header className={classes.Header}>
        <ContactRow />
        <Hero />
    </header>
);

export default Header;