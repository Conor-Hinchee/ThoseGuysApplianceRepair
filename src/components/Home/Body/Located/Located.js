import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Located.module.css';
import HeaderText from '../../../UI/Typography/HeaderText/HeaderText';
import Map from './Map/Map';

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
	        	<div id="map" className={classes.Map}>
					<Map 
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBz4nCWXXtqblPMVqiKkuWC-3Dz4igFqdY&callback=initMap&libraries=places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `100%` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
	        	</div>
	        </Col>
	    </Row>
);

export default Located;