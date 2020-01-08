import React from 'react';
import { Container} from 'reactstrap';
import classes from './UsedAppliances.module.css';
import Navigation from '../UI/Navigation/Navigation';
import Refinishing from './Refinishing/Refinishing';
import Sales from './Sales/Sales';
import Recycle from './Recycle/Recycle';
import Footer from '../UI/Footer/Footer';

const UsedAppliances = () => (
    <>
	   <Navigation
	   	sticky = {false} 
	   	navigationLinks = {[
			{
				link : "/",
				title : "Home"
			},{
				link : "#refinishing",
				title : "Refinishing"
			},{
				link : "#sales",
				title : "Used Appliance Sales" 
			},{
				link : "#recycle",
				title : "Recycling"
			}
		]}
	   />
       <main>
	   		<Container>
				<section className={classes.Space} id="sales">
					<Sales />
				</section>
				<section className={classes.Space} id="refinishing">
					<Refinishing />
				</section>
				<section className={classes.Space} id="recycle">
					<Recycle />
				</section>
   	   		</Container>
	   </main>
       <Footer />
    </>
);

export default UsedAppliances;