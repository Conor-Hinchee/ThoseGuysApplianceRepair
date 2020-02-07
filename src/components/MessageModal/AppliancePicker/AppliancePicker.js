import React, {useState, useEffect} from 'react';
import classes from './AppliancePicker.module.css';
import { Link } from 'gatsby-plugin-modal-routing';
import {Modal, ModalHeader, ModalBody, Container, Row, Button, Col} from 'reactstrap';
import IconCooktop from "../../../images/icons/black/icon_cooktop.svg";
import IconDishwasher from '../../../images/icons/black/icon_dishwasher.svg';
import IconDryer from '../../../images/icons/black/icon_dryer.svg';
import IconFreezer from '../../../images/icons/black/icon_freezer.svg';
import IconFridge from '../../../images/icons/black/icon_fridge.svg';
import IconOven from '../../../images/icons/black/icon_oven.svg';
import IconRange from '../../../images/icons/black/icon_range.svg';
import IconWasher from '../../../images/icons/black/icon_washer.svg';
import IconWaterHeater from '../../../images/icons/black/icon_water_heater.svg';
import IconDisposal  from '../../../images/icons/black/sink-garbage-disposal-kitchen-black.png';

const AppliancePicker = (props) => {

	const [isApplianceSelected, setIsApplianceSelected] = useState(
		{
			fridge : false,
			washer : false,
			dryer : false,
			dishwasher : false,
			range : false,
			oven : false,
			water_heater : false,
			freezer : false,
			cooktop : false,
			disposal : false,
			not_listed : false
		}
	);

	const [isButtonMounted, setIsButtonMounted] = useState(false);	

	useEffect(() => {
	    let hasApplianceBeenSelected = false;
		
		for (const item in isApplianceSelected) {
			 if(isApplianceSelected[item]){
			 	hasApplianceBeenSelected = true;
			 	break;
			 }
		}
		
		setIsButtonMounted(hasApplianceBeenSelected);
	  }, [isApplianceSelected]);

	
	const handleApplianceButtonClick = (e) =>{
		setIsApplianceSelected({...isApplianceSelected, 
			[e.currentTarget.id] : !isApplianceSelected[e.currentTarget.id] });
	};



    const closeBtn = <Link to="/"><button className="close">&times;</button></Link>;
    
	return(
	    <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>Appliance Selector</ModalHeader>
    		    <ModalBody>
    			    <Container>
    				    <Row className={classes.Space}>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.fridge ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="fridge"
    						    >
    							    Fridge
    							    <img src={IconFridge} alt="fridge_icon" />
    						    </Button>
    					    </Col>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.washer ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="washer"
    						    >
    							    Washer
    							    <img src={IconWasher} alt="washer_icon"/>
    						    </Button>
    					    </Col>
    				    </Row>
    				    <Row className={classes.Space}>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.dryer ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="dryer"
    						    >
    							    Dryer
    							    <img src={IconDryer} alt="dryer_icon" />
    						    </Button>
    					    </Col>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick} 
    							    className={isApplianceSelected.dishwasher ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="dishwasher"
    						    >
    							    Dishwasher
    							    <img src={IconDishwasher} alt="dishwasher_icon" />
    						    </Button>
    					    </Col>
    				    </Row>
    				    <Row className={classes.Space}>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.range ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="range"
    						    >
    							    Range
    							    <img src={IconRange} alt="range_icon" />
    						    </Button>
    					    </Col>
    					    <Col md="4" sm="6" xs="6"  className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.oven ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="oven"
    						    >
    							    Oven
    							    <img src={IconOven} alt="oven_icon" />
    						    </Button>
    					    </Col>
    				    </Row>
    				    <Row className={classes.Space}>
    					    <Col md="4" sm="6" xs="6"  className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.cooktop ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="cooktop"
    						    >
    							    Cooktop
    							    <img src={IconCooktop} alt="cooktop_icon" />
    						    </Button>
    					    </Col>
    					    <Col md="4" sm="6" xs="6"  className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.freezer ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="freezer"
    						    >
    							    Freezer
    							    <img src={IconFreezer} alt="freezer_icon"/>
    						    </Button>
    					    </Col>
    				    </Row>
    				    <Row className={classes.Space}>
    					    <Col md="4" sm="6" xs="6" className="justify-content-center">
    						    <Button onClick={handleApplianceButtonClick}  
    							    className={isApplianceSelected.water_heater ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="water_heater"
    						    >
    							    Water Heater
    							    <img src={IconWaterHeater} alt="waterheater_icon"/>
    						    </Button>
    					    </Col>
    					    <Col md="4" sm="6" xs="6" >
    						    <Button onClick={handleApplianceButtonClick}
    							    className={isApplianceSelected.disposal ? classes.FlexColActive : classes.FlexCol}
    							    color="light" block id="disposal"
    						    >
    							    Disposal
    							    <img src={IconDisposal} 
    								    className={classes.ApplianceIcon} alt="disposal" 
    							    />
    						    </Button>
    					    </Col>
    				    </Row>
    				    <Row className="justify-content-center">
    					    <Col md="4" sm="6" xs="6"  className={classes.Space}>
    						    <Button onClick={handleApplianceButtonClick}
    						        className={isApplianceSelected.not_listed ? classes.FlexColActive : classes.FlexCol} 
    							    color="light" block id="not_listed"
    						    >
    							    Some Other Appliance 
    						    </Button>
    					    </Col>
    				    </Row>
    				    {isButtonMounted &&
    					    <Row className="d-flex justify-content-end" >
    							<Button color="primary" id="Contact_Info" > 
    								Continue
    							</Button>
    					    </Row>
    				    }
    			    </Container>
    		    </ModalBody>
		    </Modal>
	);
};

export default AppliancePicker;