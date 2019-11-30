import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <img src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/ThoseGuysLogo.jpg"  
            alt="Those Guys Appliance Repair Logo" 
          />
          Those Guys Appliance Repair
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
              <NavLink href="/">Used Appliance Repair</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;