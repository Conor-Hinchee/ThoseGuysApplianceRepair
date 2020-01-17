import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import classes from './AppliancePicker.module.css';
import { ModalBody, Container, Row, Button, Col} from 'reactstrap';
import { ReactComponent as IconCooktop } from '../../../../assets/icons/icon_cooktop.svg'
import { ReactComponent as IconDishwasher } from '../../../../assets/icons/icon_dishwasher.svg';
import { ReactComponent as IconDryer } from '../../../../assets/icons/icon_dryer.svg';
import { ReactComponent as IconFreezer } from '../../../../assets/icons/icon_freezer.svg';
import { ReactComponent as IconFridge } from '../../../../assets/icons/icon_fridge.svg';
import { ReactComponent as IconOven } from '../../../../assets/icons/icon_oven.svg';
import { ReactComponent as IconRange } from '../../../../assets/icons/icon_range.svg';
import { ReactComponent as IconWasher } from '../../../../assets/icons/icon_washer.svg';
import { ReactComponent as IconWaterHeater } from '../../../../assets/icons/icon_water_heater.svg';
import IconDisposal from '../../../../assets/icons/sink-garbage-disposal-kitchen-black.png'

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


	return(
		<ModalBody>
			<Container>
				<Row className={classes.Space}>
					<Col md="4" sm="6" xs="6" className="justify-content-center">
						<Button onClick={handleApplianceButtonClick}
							className={isApplianceSelected.fridge ? classes.FlexColActive : classes.FlexCol}
							color="light" block id="fridge"
						>
							Fridge
							<IconFridge />
						</Button>
					</Col>
					<Col md="4" sm="6" xs="6" className="justify-content-center">
						<Button onClick={handleApplianceButtonClick}
							className={isApplianceSelected.washer ? classes.FlexColActive : classes.FlexCol}
							color="light" block id="washer"
						>
							Washer
							<IconWasher />
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
							<IconDryer />
						</Button>
					</Col>
					<Col md="4" sm="6" xs="6" className="justify-content-center">
						<Button onClick={handleApplianceButtonClick} 
							className={isApplianceSelected.dishwasher ? classes.FlexColActive : classes.FlexCol}
							color="light" block id="dishwasher"
						>
							Dishwasher
							<IconDishwasher />
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
							<IconRange />
						</Button>
					</Col>
					<Col md="4" sm="6" xs="6"  className="justify-content-center">
						<Button onClick={handleApplianceButtonClick}
							className={isApplianceSelected.oven ? classes.FlexColActive : classes.FlexCol}
							color="light" block id="oven"
						>
							Oven
							<IconOven  />
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
							<IconCooktop  />
						</Button>
					</Col>
					<Col md="4" sm="6" xs="6"  className="justify-content-center">
						<Button onClick={handleApplianceButtonClick}
							className={isApplianceSelected.freezer ? classes.FlexColActive : classes.FlexCol}
							color="light" block id="freezer"
						>
							Freezer
							<IconFreezer />
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
							<IconWaterHeater />
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
					<Link to={"/usedappliances/messageus/contact info"} >
						<Button color="primary" id="Contact_Info" 
							onClick={props.onContinueClick}
						> 
							Continue
						</Button>
					</Link>						
					</Row>
				}
			</Container>
		</ModalBody>
	);
};

export default AppliancePicker;