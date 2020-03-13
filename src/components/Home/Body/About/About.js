import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './About.module.css';
import HeaderText from '../../../UI/HeaderText/HeaderText';
import Link from  "gatsby-link";

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
	        		We proudly service Clovis, New Mexico and the surrounding areas.
	        	</p>
	        	<p className={classes.BodyText}>
	        		Those Guys Appliance Repair services and repairs all major appliance brands. 
	        		Take A look 
	        			<span role="img" aria-label="Eyes" aria-hidden="false"> 👀 </span> 
	        		at all the 
	        			<a href="#we_fix"> brands </a> 
	        		we service!   
	        		If you have a broken appliance in Clovis, New Mexico or Portales, New Mexico
	        		Those Guys Appliance Repair should be your first call to get the job done right! 
	        		<a href="tel:+15757428441"> (575) 742-8441</a>. 
	        	</p>
	        	<p className={classes.BodyText}>
	        		Here at Those Guys Appliance Repair we do more than just appliance repairs.
	        		<br/>
	        		We also provide an 
					<Link to={'/usedappliances/#recycle'}> appliance recycling service </Link>! 
	        		Turn your old appliance into cash by selling it to us.
	        		<br/>
	        		We sell 
					<Link to={'/usedappliances/#sales'}> used appliances </Link>! 
	        		Purchase a used appliance serviced by the professionals.
	        		<br/>
	        		We do 
					<Link to={'/usedappliances/#recycle'}> appliance refinishing </Link>!
	        		Turn your old appliance into something that looks brand new.
	        	</p>
	        </Col>
	    </Row>
);

export default About;