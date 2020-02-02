import React from 'react';
import { Container} from 'reactstrap';
import classes from './Body.module.css';
import Contact from './Contact/Contact';
import About from './About/About';
// import Carousel from './Carousel/Carousel';
// import WeFix from './WeFix/WeFix';
// import Located from './Located/Located';
// import Reviews from './Reviews/Reviews';

const Body = () => (
    <Container>
    	<section className={classes.Space} id="contact">
    		<Contact  />
    	</section>
    	<section className={classes.Space} id="who_we_are">
    	    <About />
    	</section>
    </Container>
);

export default Body;