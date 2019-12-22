import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand href="/">
          <img src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/ThoseGuysLogo.jpg"  
            alt="Those Guys Appliance Repair Logo" style={{marginRight: "10px"}}
          />
            Those Guys Appliance Repair 
          <FontAwesomeIcon icon={faWrench} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem active>
              <NavLink href="#who_we_are">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#located">Visit Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/usedappliances">Used Appliance</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default Navigation;