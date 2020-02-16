import React from 'react';
import { Container} from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from './Body.module.css';
import Contact from './Contact/Contact';
import About from './About/About';
import Carousel from './Carousel/Carousel';
import WeFix from './WeFix/WeFix';
import Located from './Located/Located';
import Reviews from './Reviews/Reviews';

const Body = () => {

	const Counter = ({ issue, updateIssue }) => (
		<div>
		  <p>Count: {issue}</p>
		  <button onClick={updateIssue}>Increment</button>
		</div>
	  );
	  
	  Counter.propTypes = {
		issue: PropTypes.string.isRequired,
		updateIssue: PropTypes.func.isRequired,
	  };
	  
	  const mapStateToProps = ({ issue }) => {
		return { issue };
	  };
	  
	  const mapDispatchToProps = dispatch => {
		return { updateIssue: () => dispatch({ type: `UPDATE_ISSUE`, payload: "wowowowow" }) };
	  };
	  
	  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

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
};

export default Body;