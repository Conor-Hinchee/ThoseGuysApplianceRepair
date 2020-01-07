import React from 'react';
import {Row, Col} from 'reactstrap';
// import classes from './Sales.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshake, faRecycle, faHandHoldingUsd, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Sales = () => (
		<>
		    <Row className="justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Recycling'}
		        />
		        
		    </Row>
		    <Row className="justify-content-center">
		    	<Col md="4" className="d-flex justify-content-around">
		    			<FontAwesomeIcon icon={faHandshake} style={{fontSize: "2.5em"}} />
		    			<FontAwesomeIcon icon={faRecycle}  style={{fontSize: "2.5em"}} />
			    		<FontAwesomeIcon icon={faHandHoldingUsd} style={{fontSize: "2.5em"}} />
			    		<FontAwesomeIcon icon={faSmileBeam} style={{fontSize: "2.5em"}} />
		    	</Col>
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
	    </>
);

export default Sales;