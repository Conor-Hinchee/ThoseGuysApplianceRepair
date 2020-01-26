import React, { useState } from 'react';
import classes from './Navigation.module.css';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav} from 'reactstrap';
import NavItems from "./NavItems/NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import ThoseGuysLogo from '../../../images/gatsby-icon.png';

const Navigation = (props) => {
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
          <img  src={ThoseGuysLogo} 
            alt="Those Guys Appliance Repair Logo" style={{marginRight: "10px"}}
          />
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