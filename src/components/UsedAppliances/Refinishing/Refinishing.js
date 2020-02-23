import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import classes from './Refinishing.module.css';
import HeaderText from '../../UI/HeaderText/HeaderText';
import FridgePaintingImg from "./FridgePaintingImg/FridgePaintingImg"
import OvenPaintingImg from './OvenPaintingImg/OvenPaintingImg';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {navigate} from 'gatsby';



const Refinishing = (props) => {
	
	const propagateModalType = () =>{
        props.addMessageType("refinishing");
        
        navigate(
        "/usedappliances/customer-info/",
            {
                state: { modal: true,
                        noScroll: true}
            }
        );
    };

	return(
		<>
		    <Row className="d-flex justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Refinishing'}
		        />
		    </Row>
	    	<Row>
	    		<Col className="text-center">
		        	<p> Paint is an easy way to update any room! Paint can go a long way in the kitchen! Those Guys 
		        		Appliance Repair offers a way to maximize the look of your kitchen or bathroom by offering appliacen 
		        		painting! Painting appliances can cover up their scratches, update the finishes, and even extend their lifespans!
		        	</p>
	        	</Col>
	    	</Row>
	    	<Row className="d-flex justify-content-around">
	    		<Col md="4" sm="10" className={classes.ImgRow}>
	    			<FridgePaintingImg />
	    		</Col>
	    		<Col md="4" sm="10" className={classes.ImgRow}>
	    			<OvenPaintingImg />
	    		</Col>
	    	</Row>
			<Row className="d-flex justify-content-center" style={{marginTop: "50px"}}>
				<Button id="Refinish_My_Appliance" size="lg" onClick={propagateModalType}>
					Refinish My Appliance
				</Button>
			</Row>
	    </>
	);	
}

Refinishing.propTypes = {
    addMessageType: PropTypes.func.isRequired,
};
	  
const mapDispatchToProps = dispatch => {
    return { addMessageType: (messageType) => dispatch({type: `ADD_MESSAGE_TYPE`, payload: messageType })
    };
};
	  
export default connect(null, mapDispatchToProps)(Refinishing);
