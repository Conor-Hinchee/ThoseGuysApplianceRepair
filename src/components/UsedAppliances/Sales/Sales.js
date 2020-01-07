import React from 'react';
import {Row, Col} from 'reactstrap';
// import classes from './Sales.module.css';
import HeaderText from '../../Typography/HeaderText/HeaderText';
import { ReactComponent as IconCooktop } from '../../../assets/icons/icon_cooktop.svg';
import { ReactComponent as IconDishwasher } from '../../../assets/icons/icon_dishwasher.svg';
import { ReactComponent as IconDryer } from '../../../assets/icons/icon_dryer.svg';
import { ReactComponent as IconFreezer } from '../../../assets/icons/icon_freezer.svg';
import { ReactComponent as IconFridge } from '../../../assets/icons/icon_fridge.svg';
import { ReactComponent as IconOven } from '../../../assets/icons/icon_oven.svg';
import { ReactComponent as IconRange } from '../../../assets/icons/icon_range.svg';
import { ReactComponent as IconWasher } from '../../../assets/icons/icon_washer.svg';

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
	    			<IconCooktop /> 
	    			<IconDishwasher />
	    			<IconDryer />
	    			<IconFreezer />
	    			<IconFridge />
	    			<IconOven />
	    			<IconRange />
	    			<IconWasher />
	    		</Col>
	    	</Row>
	    </>
);

export default Sales;