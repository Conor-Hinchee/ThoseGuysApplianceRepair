import React from 'react';
import classes from './Tabs.module.css';
import { NavItem, NavLink} from 'reactstrap';

const Tabs = (props) => (
	<NavItem>
		<NavLink  href="#" active>{props.text}</NavLink>
	</NavItem>
);

export default Tabs;