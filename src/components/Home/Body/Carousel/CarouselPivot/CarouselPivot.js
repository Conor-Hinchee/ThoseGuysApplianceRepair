import React, { Component } from 'react';
import classes from './CarouselPivot.module.css';
import CarouselItem from './CarouselItem/CarouselItem';
import WhirlpoolBrand from '../../../../../images/brands/whirlpool.svg';
import FrigidaireBrand from '../../../../../images/brands/Current_frigidaire_logo.png';
import MaytagBrand from '../../../../../images/brands/Maytag_logo_2015.png';
import GE_Brand from '../../../../../images/brands/GE.svg';
import AmanaBrand from '../../../../../images/brands/Amana_2016.png';
import SamsungBrand from '../../../../../images/brands/samsung.svg';
import InsigniaBrand from '../../../../../images/brands/insignia.gif';
import LG_Brand from '../../../../../images/brands/LG.svg';
import ElectroluxBrand from '../../../../../images/brands/Electrolux.svg';
import BoschBrand from '../../../../../images/brands/Bosch_brand.png';
import KitchenAidBrand from '../../../../../images/brands/Kitchenaid-Logo.png';


class CarouselPivot extends Component {
	
	state = {
		images: [
			{
				img : true,
				src : WhirlpoolBrand,
				alt : "Whirlpool Company Logo",
				key : 1
			},{
				img : true,
				src : FrigidaireBrand,
				alt : "Frigidaire Company Logo",
				key : 2
			},{
				img : true,
				src : MaytagBrand,
				alt : "Maytag Company Logo",
				key : 3
			},{
				img : true,
				src : GE_Brand,
				alt : "General Electric Company Logo",
				key : 4
			},{
				img : true,
				src : AmanaBrand,
				alt : "Amana Company Logo",
				key : 5
			},{
				img : true,
				src : SamsungBrand,
				alt : "Samsung Company Logo",
				key : 6
			},{
				img : true,
				src : InsigniaBrand,
				alt : "Insignia Company Logo",
				key : 7
			},{
				img : true,
				src : LG_Brand,
				alt : "LG Company Logo",
				key : 8
			},{
				img : true,
				src : ElectroluxBrand,
				alt : "Electrolux Company Logo",
				key : 9
			},{
				img : true,
				src : BoschBrand,
				alt : "Bosch Company Logo",
				key : 10
			},{
				img : true,
				src : KitchenAidBrand,
				alt : "KitchenAid Company Logo",
				key : 11
			},{
				img : false,
				text : "We Fix It All",
				key : 12
			}
		]
	}

    render() {
    	let items = this.state.images.map((item, i) =>
                <CarouselItem
                	key = {item.key}
                	img = {item.img}
                	src = {item.src}
                	alt = {item.alt}
                    text = {item.text}
                />
            );
    
        return (
            <ul className={classes.Pivot} >
				{items}
	        </ul>
        );
    }
}
export default CarouselPivot;