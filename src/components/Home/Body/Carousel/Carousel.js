import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Carousel.module.css';
import HeaderText from '../../../Typography/HeaderText/HeaderText';

const Carousel = () => (
	<Row className={classes.JustifyContentCenter}>
		<Col lg="12" md="10">
			<HeaderText 
	        	tag={2}
	    		text={'We Fix it All'}
	        />
	        <ul className={classes.Pivot}>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/whirlpool.svg" 
	        			alt="Whirlpool Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Current_frigidaire_logo.png" 
	        			alt="Frigidaire Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Maytag_logo_2015.png" 
	        			alt="Maytag Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.GeImg}
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/General_Electric_(2005)_(Print).svg" 
	        			alt="General Electric Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg}  
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Amana_2016.png" 
	        			alt="Amana Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg}  
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/Samsung_Wordmark_(Black).svg" 
	        			alt="Samsung Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/Logo-1469672344.gif" 
	        			alt="Insignia Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/LG_(2014)_(Print).svg" 
	        			alt="LG Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg}  
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/Electrolux_2015.svg" 
	        			alt="Electrolux Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg} 
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Bosch_brand.png" 
	        			alt="Bosch Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<img className={classes.RotatingImg}
	        			src="https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Kitchenaid-Logo.png" 
	        			alt="KitchenAid Company Logo" />
	        	</li>
	        	<li className={classes.Item}>
	        		<h5 className={classes.CarouselText}>
							We Fix It All
					</h5>
	        	</li>
	        </ul>
		</Col>   
	</Row>
);

export default Carousel;