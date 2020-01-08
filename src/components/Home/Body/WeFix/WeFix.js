import React, { Component } from 'react';
import {Row, Col, Nav, Fade} from 'reactstrap';
import classes from './WeFix.module.css';
import Tabs from './Tabs/Tabs';

class WeFix extends Component {
	constructor() {
      super();

      this.onTabClick = this.onTabClick.bind(this);                       
	}
	    
	state= {
		brands: [
			{
				title : "We Fix It All",
				text : `Those Guys Appliance Repair can fix any appliance issue, with over 15 years experience there is not 
						much we have not seen! We fix your Whirlpool appliances, and we fix your Frigidaire appliances, 
						and we fix your Maytag appliances, and we fix your GE appliances, and we fix your Amana appliances, 
						and we fix your Samsung appliances, and we fix your Insignia appliances, and we fix your LG appliances,
						and we fix your Electrolux appliances, and we fix your Bosch appliances, and we fix your Kitchenaid
						appliances, and we fix your......`,
				isActive : true						
			},{
				title : 'Whirlpool',
				text : `We take care of your Whirlpool appliances!
						The Whirlpool Corporation is the world's leading manufacturer and marketer of major home appliances. 
						Whirlpool customers around the world trust Whirlpool to make their lives easier. 
						We fix broken Whirlpool Refrigerators - broken Whirlpool Ovens - broken Whirlpool Dishwashers - 
						broken Whirlpool Washers - broken Whirlpool Dryers`,
				isActive : false					
			},{
				title : 'Frigidaire',
				text : `We take care of your Frigidaire appliances! Frigidaire specializes in offering high-quality,
						energy efficient kitchen and laundry appliances. We fix broken Frigidaire Ranges - 
						broken Frigidaire Stoves - broken Frigidaire Refrigerators`,
				isActive : false		
			},{
				title : 'Maytag',
				text : `We take care of your Maytag appliances! Maytag offers dependable appliances that are engineered
						to be durable. We fix broken Maytag Kitchen Appliances - broken Maytag Washers -
						broken Maytag Dryers`,
				isActive : false						
			},{
				title : 'GE',
				text : `We take care of your GE appliances! GE offers a full line of stylish, functional,
						and high-tech appliances and We fix broken GE Kitchen Appliances - broken GE Washers
						- broken GE Dryers`,
				isActive : false		
			},{
				title : 'Amana',
				text : `We take care of your Amana appliances! Amana appliance priced Right. Easy To Use. Quality Products.
						Amana brand delivers on value. We fix broken Amanda Refrigerators - broken Amanda Freezers - 
						broken Amanda Dishwashers - broken Amanda Cooktops - broken Amanda Microwaves - 
						broken Amanda Hoods - broken Amanda Washers`,
				isActive : false							
			},{
				title : 'Samsung',
				text : `We take care of your Samsung appliances! Samsung offers home appliances that create the ideal home
						you have always dreamed of. We fix broken Samsung Ranges - broken Samsung cooktops - 
						broken Samsung Ovens - broken Samsung Dishwashers.`,
				isActive : false			
			},{
				title : 'Insignia',
				text : `We take care of your Insignia appliances! We fix broken Insignia kitchen appliances - 
						broken Insignia laundry appliances`,
				isActive : false			
			},{
				title : 'LG',
				text : `We take care of your LG appliances! LG's Stainless Steel Appliances are highly rated. Reliable. 
						Energy Star Qualified. State-Of-The-Art. Durable.  We fix broken LG Washers & Dryers - 
						broken LG Washers - broken LG Washers Refrigerators - broken LG Washers Ranges - broken LG Ovens - 
						broken LG Dishwashers - broken LG Microwaves`,
				isActive : false			
			},{
				title : 'Bosch',
				text : `We take care of your Bosch appliances! Bosch has been designing home and kitchen appliances for over 125
						years, consistently raising the standards in quietness, efficiency and integrated design. 
						We fix broken Bosch Refrigerators, and Dishwashers`,
				isActive : false			
			},{
				title : 'Electrolux',
				text : `We take care of your Electrolux appliances! premium kitchen and laundry appliances for your home.  
						We fix broken Electrolux Refrigerators - broken Electrolux Ranges - broken Electrolux Cooktops - 
						broken Electrolux Washers - broken Electrolux Dryers`,
				isActive : false			
			},{
				title : 'KitchenAid',
				text : `We take care of your Kitchenaid appliances! .  We fix broken Kitchenaid Cooktops - 
						broken Kitchenaid Wall Ovens - broken Kitchenaid Refrigerators - broken Kitchenaid Ranges - 
						broken Kitchenaid Dishwashers - broken Kitchenaid Disposals - broken Kitchenaid Compactors - 
						broken Kitchenaid Hoods`,
				isActive : false			
			}
		],
		fadeText: `Those Guys Appliance Repair can fix any appliance issue, with over 15 years experience there is not 
						much we have not seen! We fix your Whirlpool appliances, and we fix your Frigidaire appliances, 
						and we fix your Maytag appliances, and we fix your GE appliances, and we fix your Amana appliances, 
						and we fix your Samsung appliances, and we fix your Insignia appliances, and we fix your LG appliances,
						and we fix your Electrolux appliances, and we fix your Bosch appliances, and we fix your Kitchenaid
						appliances, and we fix your......`,				
		shouldFade: true,						
		
	};
	
	onTabClick = (e) =>{
		let newText;
		let brands = this.state.brands;
		
		for(let i = 0 ; i < this.state.brands.length; i++){
			if(this.state.brands[i].title === e.target.id){
				newText = this.state.brands[i].text;
				brands[i].isActive = true; 
			}else if(this.state.fadeText === this.state.brands[i].text){
				brands[i].isActive = false;
			}
		}
	
		
		this.setState({
			shouldFade : false,
			brands
		}, ()=>{
			setTimeout(() => {
				this.setState({
					shouldFade: true,
					fadeText : newText
				});
			}, 200);
		});
	}
	
	render(){
		const navItems = this.state.brands.map((item, i) =>
                <Tabs
                	key = {i} 
                    text = {item.title}
                    onClick = {this.onTabClick}
                    isActive = {item.isActive}
                />
            );
		
		
		return (
				<Row className={classes.JustifyContentCenter} style={{marginTop: "15%"}}>
			    	<Col md="12" sm="10" className={classes.JustifyContentCenter}>
			    		<Nav tabs>
					    	{navItems}   
					     </Nav>
			    	</Col>
					<Col md="12" sm="10" >
						<Fade in={this.state.shouldFade} tag="p">
							{this.state.fadeText}
						</Fade>
					</Col>
				    
			    </Row>
			);
	}	
}

export default WeFix;