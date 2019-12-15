import React from 'react';
import {Row, Col} from 'reactstrap';
// import classes from './Sales.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';

const Sales = () => (
		<>
		    <Row className="justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Recycling'}
		        />
		        
		    </Row>
		    <Row className="justify-content-center">
		    	<h5 >Get CASH for your old appliances!</h5>
		    </Row>
	    	<Row>
	    		<Col class="text-center">
		        	<p>Used or old appliance recycling! Those Guys Appliance Repair will pay better 
		        		than scrap prices most of the time! Recycle your used appliances by bringing
		        		them to us and turn your old/used/non-working appliance into cash!
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