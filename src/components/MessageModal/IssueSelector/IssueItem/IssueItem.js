import React from 'react';
import {DropdownItem} from 'reactstrap';

const IssueItem = (props) => (
	<DropdownItem id={props.issue} onClick={props.itemOnClick}>
		{props.issue}
	</DropdownItem>
);

export default IssueItem;