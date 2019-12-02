import React, { Component } from 'react';
import classes from './CarouselPivot.module.css';
import CarouselItem from './CarouselItem/CarouselItem';

class CarouselPivot extends Component {
	
	state = {
		images: [
			{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/whirlpool.svg",
				alt : "Whirlpool Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Current_frigidaire_logo.png",
				alt : "Frigidaire Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Maytag_logo_2015.png",
				alt : "Maytag Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/General_Electric_(2005)_(Print).svg",
				alt : "General Electric Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Amana_2016.png",
				alt : "Amana Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/Samsung_Wordmark_(Black).svg",
				alt : "Samsung Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/Logo-1469672344.gif",
				alt : "Insignia Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/LG_(2014)_(Print).svg",
				alt : "LG Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/Electrolux_2015.svg",
				alt : "Electrolux Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Bosch_brand.png",
				alt : "Bosch Company Logo"
			},{
				img : true,
				src : "https://thoseguysappliancerepair.herokuapp.com/images/optimized/image/Kitchenaid-Logo.png",
				alt : "KitchenAid Company Logo" 
			},{
				img : false,
				text : "We Fix It All"
			}
		]
	}

    render() {
    	let items = this.state.images.map((item, i) =>
                <CarouselItem
                	img = {item.img}
                	src = {item.src}
                	alt = {item.alt}
                    text = {item.text}
                />
            );
    
        return (
            <ul className={classes.Pivot}>
				{items}
	        </ul>
        );
    }
}
export default CarouselPivot;