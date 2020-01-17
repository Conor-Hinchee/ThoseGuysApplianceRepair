import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
// import classes from './Sales.module.css';
import HeaderText from '../../UI/Typography/HeaderText/HeaderText';
import { ReactComponent as IconCooktop } from '../../../assets/icons/icon_cooktop.svg';
import { ReactComponent as IconDishwasher } from '../../../assets/icons/icon_dishwasher.svg';
import { ReactComponent as IconDryer } from '../../../assets/icons/icon_dryer.svg';
import { ReactComponent as IconFreezer } from '../../../assets/icons/icon_freezer.svg';
import { ReactComponent as IconFridge } from '../../../assets/icons/icon_fridge.svg';
import { ReactComponent as IconOven } from '../../../assets/icons/icon_oven.svg';
import { ReactComponent as IconRange } from '../../../assets/icons/icon_range.svg';
import { ReactComponent as IconWasher } from '../../../assets/icons/icon_washer.svg';

const Sales = (props) => {
	const buttonClickHandler = (e) => {
		props.showContactModal(e.target.id)
	}

	return(
		<>
		    <Row className="d-flex justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Sales'}
		        />
		        
		    </Row>
		    <Row className="d-flex justify-content-center">
		    	<h5 >Appliances for sale, for less!</h5>
		    </Row>
	    	<Row>
	    		<Col className="text-center">
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
			<Row className="d-flex justify-content-center" style={{marginTop: "50px"}}>
				<Link to={"/usedappliances/messageus/purchase"} >
					<Button id="Purchase_An_Appliance" size="lg" onClick={buttonClickHandler}>
						Purchase An Appliance
					</Button>
				</Link>	
			</Row>
	    </>
	);	
}

export default Sales;