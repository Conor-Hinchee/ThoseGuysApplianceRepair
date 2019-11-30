import React from 'react';
import {Row , Col} from 'reactstrap';
import classes from './Pricing.module.css';

const Pricing = () => (
    <Row>
    	<Col>
	    	<h2 className={classes.Header}>
	    		Clovis, NM Service Calls Start at Just
	    	</h2>
	    	<h1 className={classes.Header}>
	    		$59.95*
	    	</h1>
	    	<h6 style={{textAlign: 'center'}}>
	    		*Price varies depending on area
	    	</h6>
	    	<h5 className={classes.Header}>
	    		Active or retired military? Services are tax free!
	    	</h5>
    	</Col>
    </Row>
);

export default Pricing;
