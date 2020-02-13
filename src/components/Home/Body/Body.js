import React from 'react';
import { Container} from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import classes from './Body.module.css';
import Contact from './Contact/Contact';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import WeFix from './WeFix/WeFix';
import Located from './Located/Located';
import Reviews from './Reviews/Reviews';

const Body = () => {

	const Counter = ({ count, increment }) => (
		<div>
		  <p>Count: {count}</p>
		  <button onClick={increment}>Increment</button>
		</div>
	  )
	  
	  Counter.propTypes = {
		count: PropTypes.number.isRequired,
		increment: PropTypes.func.isRequired,
	  }
	  
	  const mapStateToProps = ({ count }) => {
		return { count }
	  }
	  
	  const mapDispatchToProps = dispatch => {
		return { increment: () => dispatch({ type: `INCREMENT` }) }
	  }
	  
	  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

	return(
		<Container>
			<section className={classes.Space} id="contact">
				<Contact  />
			</section>
			<ConnectedCounter />
			<section className={classes.Space} id="who_we_are">
				<About />
			</section>
			<section className={classes.Space} id="carousel">
				<Carousel />
			</section>
			<section className={classes.Space} id="we_fix">
				<WeFix />
			</section>
			<section className={classes.Space} id="located">
				<Located />
			</section>
			<section className={classes.Space} id="reviews">
				<Reviews />
			</section>
    	</Container>
	);
}

export default Body;