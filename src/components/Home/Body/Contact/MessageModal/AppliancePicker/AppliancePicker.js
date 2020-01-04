import React from 'react';
import classes from './AppliancePicker.module.css';
import { ModalBody, Container, Row, Button, Col} from 'reactstrap';
import { ReactComponent as IconCooktop } from '../../../../../../assets/icons/icon_cooktop.svg';
import { ReactComponent as IconDishwasher } from '../../../../../../assets/icons/icon_dishwasher.svg';
import { ReactComponent as IconDryer } from '../../../../../../assets/icons/icon_dryer.svg';
import { ReactComponent as IconFreezer } from '../../../../../../assets/icons/icon_freezer.svg';
import { ReactComponent as IconFridge } from '../../../../../../assets/icons/icon_fridge.svg';
import { ReactComponent as IconOven } from '../../../../../../assets/icons/icon_oven.svg';
import { ReactComponent as IconRange } from '../../../../../../assets/icons/icon_range.svg';
import { ReactComponent as IconWasher } from '../../../../../../assets/icons/icon_washer.svg';
import { ReactComponent as IconWaterHeater } from '../../../../../../assets/icons/icon_water_heater.svg';


const AppliancePicker = (props) => (
    <ModalBody>
      <Container>
        <Row className={classes.Space}>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}
        			color="dark" block className={classes.FlexCol} id="fridge"
        		>
        			Fridge
        			<IconFridge />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}
        			color="dark" block className={classes.FlexCol} id="washer"
        		>
        			Washer
        			<IconWasher />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}
        			color="dark" block className={classes.FlexCol} id="dryer"
        		>
        			Dryer
        			<IconDryer />
        		</Button>
        	</Col>
        </Row>
        <Row className={classes.Space}>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick} 
        			color="dark" block className={classes.FlexCol} id="dishwasher"
        		>
        			Dishwasher
        			<IconDishwasher />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}  
        			color="dark" block className={classes.FlexCol} id="range"
        		>
        			Range
        			<IconRange />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick} 
        			color="dark" block className={classes.FlexCol} id="oven"
        		>
        			Oven
        			<IconOven  />
        		</Button>
        	</Col>
        </Row>
        <Row className={classes.Space}>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}  
        			color="dark" block className={classes.FlexCol} id="water_heater"
        		>
        			Water Heater
        			<IconWaterHeater />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick} 
        			color="dark" block className={classes.FlexCol} id="freezer"
        		>
        			Freezer
        			<IconFreezer />
        		</Button>
        	</Col>
        	<Col md="4" className="justify-content-center">
        		<Button onClick={props.applianceOptionClick}  
        			color="dark" block className={classes.FlexCol} id="cooktop"
        		>
        			Cooktop
        			<IconCooktop  />
        		</Button>
        	</Col>
        </Row>
        <Row className="justify-content-between">
        	
        		<Col md="4" className={classes.Space}>
	        		<Button onClick={props.applianceOptionClick}   
	        			color="dark" block className={classes.FlexCol} id="disposal"
	        		>
	        			Disposal
						<img src="https://raw.githubusercontent.com/captnstarburst/thoseguyswebsite/master/public/images/sink-garbage-disposal-kitchen.png" 
							className={classes.ApplianceIcon} alt="disposal" 
						/>
	        		</Button>
	        	</Col>
	        	<Col md="4" className={classes.Space}>
	        		<Button onClick={props.applianceOptionClick}   
	        			color="dark" block className={classes.FlexCol} id="not_listed"
	        		>
	        			Some Other Appliance 
	        		</Button>
	        	</Col>
        	
        </Row>
      </Container>
    </ModalBody>
);

export default AppliancePicker;