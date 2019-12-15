import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Refinishing.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';

const Refinishing = () => (
		<>
		    <Row className={classes.JustifyContentCenter}>
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Refinishing'}
		        />
		        
		    </Row>
	    	<Row>
	    		<Col class="text-center">
		        	<p> Paint is an easy way to update any room! Paint can go a long way in the kitchen! Those Guys 
		        		Appliance Repair offers a way to maximize the look of your kitchen or bathroom by offering appliacen 
		        		painting! Painting appliances can cover up their scratches, update the finishes, and even extend their lifespans!
		        	</p>
	        	</Col>
	    	</Row>
	    	<Row className="d-flex justify-content-around">
	    		<Col md="4">
	    			<img className="img-fluid rounded"
	    				src="https://github.com/captnstarburst/thoseguyswebsite/blob/master/public/images/kitchen_appliances.jpeg?raw=true" />
	    		</Col>
	    		<Col md="4">
	    			<img className="img-fluid rounded"
	    			src= "https://github.com/captnstarburst/thoseguyswebsite/blob/master/public/images/kitchen_appliances.jpeg?raw=true" />
	    		</Col>
	    		
	    	</Row>
	    </>
);

export default Refinishing;