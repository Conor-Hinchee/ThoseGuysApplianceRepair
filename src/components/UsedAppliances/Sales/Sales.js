import React from 'react';
import {Row, Col} from 'reactstrap';
// import classes from './Sales.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';
import { ReactComponent as Icon_Cooktop } from '../../../assets/icons/icon_cooktop.svg';
import { ReactComponent as Icon_Dishwasher } from '../../../assets/icons/icon_dishwasher.svg';
import { ReactComponent as Icon_Dryer } from '../../../assets/icons/icon_dryer.svg';
import { ReactComponent as Icon_Freezer } from '../../../assets/icons/icon_freezer.svg';
import { ReactComponent as Icon_Fridge } from '../../../assets/icons/icon_fridge.svg';
import { ReactComponent as Icon_Oven } from '../../../assets/icons/icon_oven.svg';
import { ReactComponent as Icon_Range } from '../../../assets/icons/icon_range.svg';
import { ReactComponent as Icon_Washer } from '../../../assets/icons/icon_washer.svg';
import { ReactComponent as Icon_Water_Heater } from '../../../assets/icons/icon_water_heater.svg';

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
	    		<Col md="6" className="d-flex justify-content-around">
	    			<Icon_Cooktop /> 
	    			<Icon_Dishwasher />
	    			<Icon_Dryer />
	    			<Icon_Freezer />
	    			<Icon_Fridge />
	    			<Icon_Oven />
	    			<Icon_Range />
	    			<Icon_Washer />
	    			<Icon_Water_Heater />
	    		</Col>
	    	</Row>
	    </>
);

export default Sales;