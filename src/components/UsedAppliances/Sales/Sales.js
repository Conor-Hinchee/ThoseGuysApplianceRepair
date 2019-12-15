import React from 'react';
import {Row, Col} from 'reactstrap';
// import classes from './Sales.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';

const Sales = () => (
		<>
		    <Row className="justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Sales'}
		        />
		        
		    </Row>
		    <Row className="justify-content-center">
		    	<h5 >Appliances for sale, for less!</h5>
		    </Row>
	    	<Row>
	    		<Col class="text-center">
		        	<p> Those Guys Appliance has used Appliance sets for sale,
		        		Stoves, Dishwashers for sale and serviced by us! Give us a call or message us today!
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

export default Sales;