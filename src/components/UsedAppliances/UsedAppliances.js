import React from 'react';
import { Container} from 'reactstrap';
import classes from './UsedAppliances.module.css';
import Navigation from './Navigation/Navigation';
import Refinishing from './Refinishing/Refinishing';
import Sales from './Sales/Sales';
import Recycle from './Recycle/Recycle';
import Footer from '../Home/Footer/Footer';

const UsedAppliances = () => (
    <>
       <Navigation />
       <Container>
	    	<main>
		    	<section className={classes.Space}>
		    		<Refinishing />
		    	</section>
		    	<section className={classes.Space}>
		    	    <Sales />
		    	</section>
		    	<section className={classes.Space}>
		    	    <Recycle />
		    	</section>
	       </main>
       </Container>
       
       <Footer />
    </>
);

export default UsedAppliances;