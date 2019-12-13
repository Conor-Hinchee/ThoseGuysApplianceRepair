import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import classes from './Hero.module.css';

const Hero = () => (
    <section className={classes.HeroBox} style={{width: '100%'}}>
	    <div className={classes.HeroBg}>
	    	<div className={classes.HeroTextPlacement}>
	    		<h1 className={classes.HeroText}> 
	    			<FontAwesomeIcon icon={faWrench} className={classes.faRotate45} />
	    			Those Guys Appliance Repair
	    			<FontAwesomeIcon icon={faWrench} />
	        	</h1>
	        	<h4 className={classes.HeroTextSmall}>
	        		Call or message us today to get Those Guys on their way!
	        	</h4>	
	    	</div>
	    </div>
    </section>
);


export default Hero;