import React from "react";
import {Container} from "reactstrap";
import Sales from "./Sales/Sales";
import Refinishing from "./Refinishing/Refinishing";
import Recycle from "./Recycle/Recycle";
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
			<section className={classes.Space} id="recycle">
				<Recycle />
			</section>
        </Container>      
    );
};

export default UsedAppliances;
