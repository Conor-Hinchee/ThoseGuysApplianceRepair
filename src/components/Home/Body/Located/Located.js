import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Located.module.css';
import HeaderText from '../../../Typography/HeaderText/HeaderText';

const Located = () => (
	    <Row className={classes.JustifyContentCenter}>
	        <Col md='10'>
	        	<HeaderText 
	        		tag={2}
	    	        text={'Visit us at 2019 Thornton St, Clovis, NM 88101'}
	        	/>
	        	<h5 className={"text-center"}>
					Open Monday - Friday from 8am - 5pm
				</h5>
	        </Col>
	        <Col md="10" className={classes.JustifyContentCenter}>
	        	<div id="map" className={classes.Map}></div>
	        </Col>
	    </Row>
);

export default Located;