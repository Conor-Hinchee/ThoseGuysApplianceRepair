import React from 'react';
import { NavItem, NavLink} from 'reactstrap';

const Tabs = (props) => (
	<NavItem style={{cursor: "pointer"}}>
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