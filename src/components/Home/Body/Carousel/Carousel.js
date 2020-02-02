import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Carousel.module.css';
import HeaderText from '../../../UI/Typography/HeaderText/HeaderText';
import CarouselPivot from './CarouselPivot/CarouselPivot';

const Carousel = () => (
	<Row className={classes.JustifyContentCenter}>
		<Col lg="12" md="10">
			<HeaderText 
	        	tag={2}
	    		text={'We Fix it All'}
	        />
	        <CarouselPivot />
		</Col>   
	</Row>
);

export default Carousel;