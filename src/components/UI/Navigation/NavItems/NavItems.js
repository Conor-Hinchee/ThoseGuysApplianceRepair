import React from 'react';
import {NavItem, NavLink} from 'reactstrap';
import Link from  "gatsby-link";

const NavItems = (props) => {
  return (
    <NavItem >
      <NavLink>
        <Link to={props.link} style={{color: "white"}}>{props.title}</Link>
      </NavLink>  
    </NavItem>
  );
};

export default NavItems;