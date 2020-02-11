import React from "react";
import classes from './CarouselPivot.module.css';
import WhirlpoolIcon from '../../../../../images/brands/whirlpool.svg';
import FrigidaireIcon from "./CarouselItem/FrigidaireIcon";
import MaytagIcon from "./CarouselItem/MaytagIcon";
import GE_Icon from '../../../../../images/brands/GE.svg';
import AmanaIcon from "./CarouselItem/AmanaIcon";
import SamsungIcon from '../../../../../images/brands/samsung.svg';
import InsigniaIcon from '../../../../../images/brands/insignia.gif';
import LGIcon from '../../../../../images/brands/LG.svg';
import ElectroluxIcon from '../../../../../images/brands/Electrolux.svg';
import BoschIcon from "./CarouselItem/BoschIcon";
import KitchenaidIcon from "./CarouselItem/KitchenaidIcon";


const CarouselPivot = () => {
  return (
      <ul className={classes.Pivot} >
				<li className={classes.Item}>
		    	<img className={classes.RotatingImg}
		        	src={WhirlpoolIcon}
		        	alt="Whirlpool Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
					<div className={classes.RotatingImg}>
		    		<FrigidaireIcon />
		  		</div>  
				</li>
				<li className={classes.Item}>
					<div className={classes.RotatingImg}>
		    		<MaytagIcon />
		  		</div>  
				</li>
				<li className={classes.Item}>
		    	<img className={classes.GeImg}
		        	src={GE_Icon}
		        	alt="General Electric Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
					<div className={classes.RotatingImg}>
		    		<AmanaIcon />
		  		</div>  
				</li>
				<li className={classes.Item}>
		    	<img className={classes.RotatingImg}
		        	src={SamsungIcon}
		        	alt="Samsung Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
		    	<img className={classes.RotatingImg}
		        	src={InsigniaIcon}
		        	alt="Insignia Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
		    	<img className={classes.RotatingImg}
		        	src={LGIcon}
		        	alt="Insignia Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
		    	<img className={classes.RotatingImg}
		        	src={ElectroluxIcon}
		        	alt="Electrolux Company Logo"
	        	/>
				</li>
				<li className={classes.Item}>
					<div className={classes.RotatingImg}>
		    		<BoschIcon />
		  		</div>  
				</li>
				<li className={classes.Item}>
					<div className={classes.RotatingImg}>
		    		<KitchenaidIcon />
		  		</div>  
				</li>
				<li className={classes.Item}>
					<h5 className={classes.CarouselText}>
						We Fix It All
					</h5>
				</li>
	  </ul>
  );
};

export default CarouselPivot;
