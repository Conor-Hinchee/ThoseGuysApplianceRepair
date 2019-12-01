import React from 'react';
import {Row , Col} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';

const Pricing = () => (
    <Row>
    	<Col>
    		<HeaderText 
    			tag = {2}
    			text = {"Clovis, NM Service Calls Start at Just"}
    		/>
    		<HeaderText 
    			tag = {1}
    			text = {"$59.95*"}
    		/>
	    	<h6 style={{textAlign: 'center'}}>
	    		*Price varies depending on area
	    	</h6>
	    	<HeaderText 
    			tag = {5}
    			text = {"Active or retired military? Services are tax free!"}
    		/>
    	</Col>
    </Row>
);

export default Pricing;