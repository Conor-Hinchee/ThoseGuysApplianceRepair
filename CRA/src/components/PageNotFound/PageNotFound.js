import React from 'react';
import Helmet from 'react-helmet';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import classes from './PageNotFound.module.css';

const PageNotFound = () => (
    <main className={classes.PageNotFound}>
    	<Helmet title="🧦 Lost Socks 🧦" />
    	
    	<div className={classes.HeroTextPlacement}>
    		<h1>404 Error</h1>
			<h3>Looks like the page is missing or has moved. Sorry about that</h3>
			<Link to={'/'} >
				<Button outline color="primary" size="lg" style={{color: "white"}}>
					Go Back
				</Button>
			</Link>	
    	</div>
    </main>
);

export default PageNotFound;