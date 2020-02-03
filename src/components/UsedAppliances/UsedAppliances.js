import React from "react";
import {Container} from "reactstrap";
import Sales from "./Sales/Sales";
import Refinishing from "./Refinishing/Refinishing";
import classes from "./UsedAppliances.module.css";

const UsedAppliances = () =>{
    return(
        <Container>
			<section className={classes.Space} id="sales">
			    <Sales />
			</section>
			<section className={classes.Space} id="refinishing">
				<Refinishing />
			</section>
        </Container>      
    );
};

export default UsedAppliances;
