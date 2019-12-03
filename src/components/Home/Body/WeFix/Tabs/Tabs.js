import React from 'react';
// import classes from './Tabs.module.css';
import { NavItem, NavLink} from 'reactstrap';

const Tabs = (props) => (
	<NavItem>
		{props.isActive ?
			<NavLink onClick={props.onClick} id={props.text}  active>
				{props.text}
			</NavLink> :
			<NavLink onClick={props.onClick} id={props.text} >
				{props.text}
			</NavLink>
		}
	</NavItem>
);

export default Tabs;