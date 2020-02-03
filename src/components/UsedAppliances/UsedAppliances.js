import React from "react";
import {Container} from "reactstrap";
import Sales from "./Sales/Sales";
import classes from "./UsedAppliances.module.css";

const UsedAppliances = () =>{
    return(
        <Container>
			<section className={classes.Space} id="sales">
			    <Sales />
			</section>
        </Container>      
    );
};

export default UsedAppliances;
