import React, { Component } from 'react';
import classes from './CarouselPivot.module.css';
import CarouselItem from './CarouselItem/CarouselItem';
import WhirlpoolBrand from '../../../../../assets/images/brands/whirlpool.svg';
import FrigidaireBrand from '../../../../../assets/images/brands/Current_frigidaire_logo.png';
import MaytagBrand from '../../../../../assets/images/brands/Maytag_logo_2015.png';
import GE_Brand from '../../../../../assets/images/brands/GE.svg';
import AmanaBrand from '../../../../../assets/images/brands/Amana_2016.png';
import SamsungBrand from '../../../../../assets/images/brands/samsung.svg';
import InsigniaBrand from '../../../../../assets/images/brands/insignia.gif';
import LG_Brand from '../../../../../assets/images/brands/LG.svg';
import ElectroluxBrand from '../../../../../assets/images/brands/Electrolux.svg';
import BoschBrand from '../../../../../assets/images/brands/Bosch_brand.png';
import KitchenAidBrand from '../../../../../assets/images/brands/Kitchenaid-Logo.png';


class CarouselPivot extends Component {
	
	state = {
		images: [
			{
				img : true,
				src : WhirlpoolBrand,
				alt : "Whirlpool Company Logo"
			},{
				img : true,
				src : FrigidaireBrand,
				alt : "Frigidaire Company Logo"
			},{
				img : true,
				src : MaytagBrand,
				alt : "Maytag Company Logo"
			},{
				img : true,
				src : GE_Brand,
				alt : "General Electric Company Logo"
			},{
				img : true,
				src : AmanaBrand,
				alt : "Amana Company Logo"
			},{
				img : true,
				src : SamsungBrand,
				alt : "Samsung Company Logo"
			},{
				img : true,
				src : InsigniaBrand,
				alt : "Insignia Company Logo"
			},{
				img : true,
				src : LG_Brand,
				alt : "LG Company Logo"
			},{
				img : true,
				src : ElectroluxBrand,
				alt : "Electrolux Company Logo"
			},{
				img : true,
				src : BoschBrand,
				alt : "Bosch Company Logo"
			},{
				img : true,
				src : KitchenAidBrand,
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