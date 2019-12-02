import React from 'react';
import classes from './CarouselItem.module.css';


const CarouselItem = (props) => (
	<li className={classes.Item}>
		{props.img ? 
			<img className={classes.RotatingImg}
	    		src= {props.src}
	    		alt = {props.alt}
	    	/>
	    	:
	    	<h5 className={classes.CarouselText}>
				{props.text}
			</h5>
		}
	</li>
);

export default CarouselItem;