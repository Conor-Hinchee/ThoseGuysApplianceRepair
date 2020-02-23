import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import HeaderText from '../../UI/HeaderText/HeaderText';
import IconCooktop from "../../../images/icons/black/icon_cooktop.svg";
import IconDishwasher from '../../../images/icons/black/icon_dishwasher.svg';
import IconDryer from '../../../images/icons/black/icon_dryer.svg';
import IconFreezer from '../../../images/icons/black/icon_freezer.svg';
import IconFridge from '../../../images/icons/black/icon_fridge.svg';
import IconOven from '../../../images/icons/black/icon_oven.svg';
import IconRange from '../../../images/icons/black/icon_range.svg';
import IconWasher from '../../../images/icons/black/icon_washer.svg';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {navigate} from 'gatsby';


const Sales = (props) => {

	const propagateModalType = () =>{
        props.addType("sales");
        
        navigate(
        "/usedappliances/appliance-picker/",
            {
                state: { modal: true,
                        noScroll: true}
            }
        );
    };

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
	    			<img src={IconCooktop} alt="cooktop_icon" />
	    			<img src={IconDishwasher} alt="dishwasher_icon" />
	    			<img src={IconDryer} alt="dryer_icon" />
	    			<img src={IconFreezer} alt="freezer_icon"/>
	    			<img src={IconFridge} alt="fridge_icon" />
	    			<img src={IconOven} alt="oven_icon" />
	    			<img src={IconRange} alt="oven_icon" />
	    			<img src={IconWasher} alt="washer_icon"/>
	    		</Col>
	    	</Row>
	    	<Row className="d-flex justify-content-center" style={{marginTop: "50px"}}>
				<Button id="Purchase_An_Appliance" size="lg" onClick={propagateModalType} >
					Purchase An Appliance
				</Button>
			</Row>
	    </>
	);	
};

Sales.propTypes = {
    addType: PropTypes.func.isRequired,
};
	  
const mapDispatchToProps = dispatch => {
    return { addType: () => dispatch({type: `ADD_TYPE`})
    };
};
	  
export default connect(null, mapDispatchToProps)(Sales);
