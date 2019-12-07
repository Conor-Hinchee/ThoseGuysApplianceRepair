import React from 'react';
import {Row, Col} from 'reactstrap';
import classes from './Footer.module.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faGoogle, faYelp} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { UncontrolledTooltip } from 'reactstrap';

const Footer = () => (
	
	<footer className="container-fluid" style={{marginTop: "5%"}}>
		<Row className="bg-dark">
			<Col sm="4" >
				<UncontrolledTooltip placement="top" target="UncontrolledTooltipFacebook">
	        		Facebook
    			</UncontrolledTooltip>
				<a href="https://www.facebook.com/Those-Guys-Appliance-Repair-2000600620203240"
					id="UncontrolledTooltipFacebook"
					target="_blank" rel="noopener noreferrer" className={classes.Social}>
						<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				
				<UncontrolledTooltip placement="top" target="UncontrolledTooltipGoogle">
	        		Google
    			</UncontrolledTooltip>
				<a href="https://www.google.com/search?output=search&q=Those+Guys+Appliance+Repair&ludocid=11439490273277852189&kgs=af623a999825a4f8&shndl=-1&source=sh/x/kp/local&entrypoint=sh/x/kp/local" 
					id="UncontrolledTooltipGoogle"
					target="_blank" rel="noopener noreferrer" className={classes.Social}>
					<FontAwesomeIcon icon={faGoogle} />
				</a>
				
				<UncontrolledTooltip placement="top" target="UncontrolledTooltipYelp">
	        		Yelp
    			</UncontrolledTooltip>
				<a href="https://www.yelp.com/biz/those-guys-appliance-repair-clovis"
					id="UncontrolledTooltipYelp"
					target="_blank" rel="noopener noreferrer" className={classes.Social}>
						<FontAwesomeIcon icon={faYelp} />
				</a>
				
			</Col>
			<Col sm="4" className={classes.VerticalAlign}>
				<h6 className={classes.FooterHeader}>
					Those Guys Appliance Repair &copy; 2020
				</h6>
			</Col>
			<Col sm="4">
				<p className={classes.Author}>
					Made with&nbsp;
						<FontAwesomeIcon icon={faHeart} className={classes.Heart} /> 
					&nbsp;by&nbsp;
						<a className={classes.AuthorLink} 
							target="_blank"
							rel="noopener noreferrer"
							href="http://www.conorhinchee.com"
						>
							Conor Hinchee
						</a>
				</p>
			</Col>
		</Row>
	</footer>
);
	
export default Footer;