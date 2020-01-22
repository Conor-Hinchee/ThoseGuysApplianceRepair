import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
// import classes from './Sales.module.css';
import HeaderText from '../../UI/Typography/HeaderText/HeaderText';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshake, faRecycle, faHandHoldingUsd, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Recycle = (props) => {
	
	const buttonClickHandler = (e) => {
		props.showContactModal(e.target.id)
	}


	return(
		<>
		    <Row className="justify-content-center">
		    	<HeaderText 
		        		tag={1}
		    	        text={'Appliance Recycling'}
		        />
		    </Row>
		    <Row className="justify-content-center">
		    	<h5 >Get CASH for your old appliances!</h5>
		    </Row>
			<Row className="justify-content-center">
		    	<Col md="6" className="d-flex justify-content-around">
		    			<FontAwesomeIcon icon={faHandshake} style={{fontSize: "2.5em"}} />
		    			<FontAwesomeIcon icon={faRecycle}  style={{fontSize: "2.5em"}} />
			    		<FontAwesomeIcon icon={faHandHoldingUsd} style={{fontSize: "2.5em"}} />
			    		<FontAwesomeIcon icon={faSmileBeam} style={{fontSize: "2.5em"}} />
		    	</Col>
		    </Row>
	    	<Row>
	    		<Col className="text-center">
		        	<p>Used or old appliance recycling! Those Guys Appliance Repair will pay better 
		        		than scrap prices most of the time! Recycle your used appliances by bringing
		        		them to us and turn your old/used/non-working appliance into cash!
		        	</p>
	        	</Col>
	    	</Row>
			<Row className="d-flex justify-content-center" style={{marginTop: "50px"}}>
				<Link to={"/usedappliances/messageus/recycle"} > 
					<Button id="Recycle_My_Appliance" size="lg" onClick={buttonClickHandler}>
						Recycle My Appliance
					</Button>
				</Link>	
			</Row>
	    </>
	);	
}

export default Recycle;