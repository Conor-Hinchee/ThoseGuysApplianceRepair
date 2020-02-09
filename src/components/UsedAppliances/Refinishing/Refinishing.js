import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Link} from "gatsby"
import classes from './Refinishing.module.css';
import HeaderText from '../../UI/HeaderText/HeaderText';
import FridgePaintingImg from "./FridgePaintingImg/FridgePaintingImg"
import OvenPaintingImg from './OvenPaintingImg/OvenPaintingImg';


const Refinishing = () => {

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
				<Link
	    			to="/usedappliances/customer-info/"
					  state={{
						modal: true
					  }}
				>
					<Button id="Refinish_My_Appliance" size="lg">
						Refinish My Appliance
					</Button>
				</Link>	
			</Row>
	    </>
	);	
}

export default Refinishing;