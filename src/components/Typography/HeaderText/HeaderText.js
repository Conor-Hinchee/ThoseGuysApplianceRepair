import React from 'react';
import classes from './HeaderText.module.css';

const HeaderText = (props) => (
	<>	
	   {props.tag === 1 &&
	   		<h1 className={classes.HeaderText}>
	   			{props.text}
	   		</h1>
	   }
	   {props.tag === 2 &&
	   		<h2 className={classes.HeaderText}>
	   			{props.text}
	   		</h2>
	   }
	   {props.tag === 3 &&
	   		<h3 className={classes.HeaderText}>
	   			{props.text}
	   		</h3>
	   }
	   {props.tag === 4 &&
	   		<h4 className={classes.HeaderText}>
	   			{props.text}
	   		</h4>
	   }
	   {props.tag === 5 &&
	   		<h5 className={classes.HeaderText}>
	   			{props.text}
	   		</h5>
	   }
   	</>
);

export default HeaderText;