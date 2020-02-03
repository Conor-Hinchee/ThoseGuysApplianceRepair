import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import classes from './Refinishing.module.css';
import HeaderText from '../../UI/HeaderText/HeaderText';
import FridgePainting from '../../../images/fridepainting.jpg';
import OvenPainting from '../../../images/ovenpainting.jpg';


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
	    			<img className="img-fluid rounded" style={{border: "3px solid black"}}
	    				src={FridgePainting} alt="Refrigerator refinished with paint" />
	    		</Col>
	    		<Col md="4" sm="10" className={classes.ImgRow}>
	    			<img className="img-fluid rounded" style={{border: "3px solid black"}}
	    			src={OvenPainting} alt="Oven refinished with paint" />
	    		</Col>
	    	</Row>
			<Row className="d-flex justify-content-center" style={{marginTop: "50px"}}>
				<Button id="Refinish_My_Appliance" size="lg">
					Refinish My Appliance
				</Button>
			</Row>
	    </>
	);	
}

export default Refinishing;