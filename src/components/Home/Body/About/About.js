import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './About.module.css';
import HeaderText from '../../../Typography/HeaderText/HeaderText';

const About = () => (
	    <Row className={classes.JustifyContentCenter}>
	    	<HeaderText 
	        		tag={1}
	    	        text={'Those Guys Appliance Repair'}
	        	/>
	        <Col md='8' sm='10'>
	        	
	        	<p className={classes.BodyText} style={{marginTop: '5%'}}>
	        		David Pearson has been in the appliance repair business for over 15 years, and in the spring of 2018, 
	        		David and his sons started Those Guys Appliance Repair! 
	        		Proudly serving the Clovis, Portales New Mexico and the surrounding areas!
	        	</p>
	        	<p className={classes.BodyText}>
	        		Those Guys Appliance Repair services all brands. If you have a broken appliance in Clovis, NM,
	        		Those Guys Appliance Repair should be your first call !
	        	</p>
	        </Col>
	    </Row>
);

export default About;