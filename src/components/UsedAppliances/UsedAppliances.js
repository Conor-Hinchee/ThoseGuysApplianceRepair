import React from 'react';
import { Container} from 'reactstrap';
import classes from './UsedAppliances.module.css';
import Navigation from './Navigation/Navigation';
import Refinishing from './Refinishing/Refinishing';
import Sales from './Sales/Sales';
import Recycle from './Recycle/Recycle';
import Footer from '../UI/Footer/Footer';

const UsedAppliances = () => (
    <>
       <Navigation />
       <main>
	   		<Container>
				<section className={classes.Space}>
					<Sales />
				</section>
				<section className={classes.Space}>
					<Refinishing />
				</section>
				<section className={classes.Space}>
					<Recycle />
				</section>
   	   		</Container>
	   </main>
       <Footer />
    </>
);

export default UsedAppliances;