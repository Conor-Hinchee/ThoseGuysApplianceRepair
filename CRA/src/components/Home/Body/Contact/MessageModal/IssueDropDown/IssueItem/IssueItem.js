import React from 'react';
import {DropdownItem} from 'reactstrap';
// import classes from './CarouselItem.module.css';


const IssueItem = (props) => (
	<DropdownItem id={props.issue} onClick={props.itemOnClick}>
		{props.issue}
	</DropdownItem>
);

export default IssueItem;