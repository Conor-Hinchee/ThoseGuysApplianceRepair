import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import NavItems from "./NavItems/NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import ThoseGuysLogo from '../../../assets/images/ThoseGuysLogo.jpg';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const navItems = props.navigation.map((item, i) => 
    <NavItems 
        link = {item.link}
        title = {item.title}
    />
  );


  return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src={ThoseGuysLogo}  
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