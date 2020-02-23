import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import HeaderText from '../../UI/HeaderText/HeaderText';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshake, faRecycle, faHandHoldingUsd, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {navigate} from 'gatsby';


const Recycle = (props) => {
	
	const propagateModalType = () =>{
        props.addType("recycle");
        
        navigate(
        "/usedappliances/customer-info/",
            {
                state: { modal: true,
                        noScroll: true}
            }
        );
    };
	
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
				
					<Button id="Recycle_My_Appliance" size="lg" onClick={propagateModalType}>
						Recycle My Appliance
					</Button>
				
			</Row>
	    </>
	);	
}

Recycle.propTypes = {
    addType: PropTypes.func.isRequired,
};
	  
const mapDispatchToProps = dispatch => {
    return { addType: () => dispatch({type: `ADD_TYPE`})
    };
};
	  
export default connect(null, mapDispatchToProps)(Recycle);
