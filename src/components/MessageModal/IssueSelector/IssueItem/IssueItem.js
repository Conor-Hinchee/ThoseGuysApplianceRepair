import React from 'react';
import {DropdownItem} from 'reactstrap';
import GatsbyLink from  "gatsby-link";

const IssueItem = (props) => (
	<GatsbyLink to={"/repair/customer-info"} 
		state={{
			modal: true
		}}
    >
		<DropdownItem id={props.issue} onClick={props.itemOnClick}>
			{props.issue}
		</DropdownItem>
	</GatsbyLink>
);

export default IssueItem;