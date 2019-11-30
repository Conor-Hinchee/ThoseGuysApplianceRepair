import React from 'react';
import { Container} from 'reactstrap';
import classes from './Body.module.css';
import Pricing from './Pricing/Pricing';

const Body = () => (
    <Container>
    	<section className={classes.Space}>
    		<Pricing />
    	</section>
    </Container>
);

export default Body;
