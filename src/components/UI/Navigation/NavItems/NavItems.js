import React from 'react';
import {NavItem, NavLink} from 'reactstrap';

const NavItems = (props) => {
  return (
    <NavItem >
        <NavLink href={props.link}>{props.title}</NavLink>
    </NavItem>
  );
};

export default NavItems;