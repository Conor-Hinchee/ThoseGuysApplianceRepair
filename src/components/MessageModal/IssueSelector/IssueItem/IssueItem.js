import React from 'react';
import {DropdownItem} from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {navigate} from 'gatsby';


const IssueItem = (props) => {

	const handleClick = (e) =>{
        props.updateIssue(e.currentTarget.id);
        navigate(
        "/repair/customer-info",
            {
                state: { modal: true },
            }
        );
    };
	
	return(
		<DropdownItem id={props.issue} onClick={handleClick}>
			{props.issue}
		</DropdownItem>
	);
	
};

IssueItem.propTypes = {
    updateIssue: PropTypes.func.isRequired,
  };
  
  
  const mapDispatchToProps = dispatch => {
    return { updateIssue: (id) => dispatch({type: `UPDATE_ISSUE`, payload: id})
    };
  };
  

export default connect(null, mapDispatchToProps)(IssueItem);
