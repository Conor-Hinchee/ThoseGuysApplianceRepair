import React from 'react';
import {Button} from 'reactstrap';
import Link from  "gatsby-link";
import classes from './PageNotFound.module.css';

const PageNotFound = () => (
    <div className={classes.PageNotFound}>
    	<div className={classes.HeroTextPlacement}>
    		<h1>404 Error</h1>
			<h3>Looks like the page is missing or has moved. Sorry about that</h3>
			    <Link to="/">
    				<Button outline color="primary" size="lg" style={{color: "white"}}>
    					Go Back
    				</Button>
				</Link>
    	</div>
    </div>
);

export default PageNotFound;