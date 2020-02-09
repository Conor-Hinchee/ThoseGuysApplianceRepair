import React, { useState } from 'react';
import classes from './Navigation.module.css';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from 'reactstrap';
import NavItems from "./NavItems/NavItems";
import NavbarIcon from "./NavbarIcon/NavbarIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';


const Navigation = ( props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const navItems = props.navigationLinks.map((item, i) => 
    <NavItems 
        key = {item.title}
        link = {item.link}
        title = {item.title}
    />
  );


  return (
      <Navbar color="dark" dark expand="md" sticky={props.sticky ? "top" : ""}>
        <NavbarBrand href="/" className={classes.NavbarBrand}>
            <NavbarIcon />
            Those Guys Appliance Repair 
          <FontAwesomeIcon icon={faWrench} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default Navigation;