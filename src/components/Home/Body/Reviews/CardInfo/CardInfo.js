import React from 'react';
import {Card, CardHeader, CardFooter, CardTitle, CardText, CardBody} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import classes from './CardInfo.module.css';

const CardInfo = (props) => (
	<Card className={props.active ? classes.cardActive : classes.cardInactive}>
		<CardHeader>
			{props.starz === 4 && (
	    			<div className="card-top" style={{textAlign: "center"}}>
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
	    			</div>
	    		)}
	    		{props.starz === 5 && (
	    			<div className="card-top" style={{textAlign: "center"}}>
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
		    			<FontAwesomeIcon icon={faStar} style={{color: "gold"}} />
	    			</div>
	    		)}
		</CardHeader>
	    <CardBody>
	    	<CardTitle className="text-center">
	    		{props.title}
	    	</CardTitle>
	    	<CardText>{props.active ? props.text : ""}</CardText>
	    	<CardFooter>{props.date}</CardFooter>
	    </CardBody>
    </Card>
);

export default CardInfo;