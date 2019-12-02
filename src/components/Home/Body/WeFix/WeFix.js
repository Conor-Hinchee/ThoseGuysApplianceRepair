import React, { Component } from 'react';
import {Row, Col, Nav, NavItem, NavLink, Fade} from 'reactstrap';
import classes from './WeFix.module.css';
import Tabs from './Tabs/Tabs'

class WeFix extends Component {
	
	state= {
		brands: [
			{
				title: "We Fix It All"	
			},{
				title: 'Whirlpool'
			},{
				title: 'Frigidaire'
			},{
				title: 'Maytag'
			},{
				title: 'GE'
			},{
				title: 'Amana'
			},{
				title: 'Samsung'
			},{
				title: 'Insignia'
			},{
				title: 'LG'
			},{
				title: 'Bosch'
			},{
				title: 'Electrolux'
			},{
				title: 'KitchenAid'
			}
		]
		
	};
	
	render(){
		let navItems = this.state.brands.map((item, i) =>
                <Tabs
                    text = {item.title}
                />
            );
		
		return (
				<Row className={classes.JustifyContentCenter}>
			    	<Col md="12" sm="10" className={classes.JustifyContentCenter}>
			    		<Nav tabs>
					    	
					    	{navItems}   
					       
					     </Nav>
					      
			    	</Col>
			    	<Fade in={true} tag="p">
			                	We take care of your Whirlpool appliances!
			The Whirlpool Corporation is the world's leading manufacturer and marketer of major home appliances. Whirlpool customers around the world trust Whirlpool to make their lives easier. We fix broken Whirlpool Refrigerators - broken Whirlpool Ovens - broken Whirlpool Dishwashers - broken Whirlpool Washers - broken Whirlpool Dryers
			        </Fade>
			    
			    </Row>
			);
	}	
};

export default WeFix;