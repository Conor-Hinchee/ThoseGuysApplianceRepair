import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, Container, Row, Col } from 'reactstrap';
import { Link } from 'gatsby-plugin-modal-routing';
import {navigate} from 'gatsby';
import IconCooktop from "../../images/icons/white/icon_cooktop.svg";
import IconDishwasher from '../../images/icons/white/icon_dishwasher.svg';
import IconDryer from '../../images/icons/white/icon_dryer.svg';
import IconFreezer from '../../images/icons/white/icon_freezer.svg';
import IconFridge from '../../images/icons/white/icon_fridge.svg';
import IconOven from '../../images/icons/white/icon_oven.svg';
import IconRange from '../../images/icons/white/icon_range.svg';
import IconWasher from '../../images/icons/white/icon_washer.png';
import IconWaterHeater from '../../images/icons/white/icon_water_heater.svg';
import IconDisposal  from '../../images/icons/white/sink-garbage-disposal-kitchen.png';
import classes from "./ApplianceSelector.module.css";

const ApplianceSelector = (props) => {

    const closeBtn =(<Link to="/"><button className="close" onClick ={props.clearState}>
        &times;</button></Link>);

    const handleClick = (e) =>{
        props.addAppliance(e.currentTarget.id);
        navigate(
        "/repair/appliance-issue",
            {
                state: { modal: true },
            }
        );
    };

    return (
        <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>Appliance Selector</ModalHeader>
            <ModalBody>
                <Container>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Button color="dark" block className={classes.FlexCol} id="fridge"
                                onClick={handleClick}
                            >
                                    Fridge
                                    <img src={IconFridge} alt="fridge_icon" />
                            </Button>
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                           
                                <Button color="dark" block className={classes.FlexCol} id="washer"
                                    onClick={handleClick}
                                >
                                    Washer
                                    <img src={IconWasher} alt="washer_icon"/>
                                </Button>
                            	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                           
                                <Button color="dark" block className={classes.FlexCol} id="dryer"
                                    onClick={handleClick}
                                >
                                    Dryer
                                    <img src={IconDryer} alt="dryer_icon" />
                                </Button>
                            	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="dishwasher"
                                    onClick={handleClick}
                                >
                                    Dishwasher
                                    <img src={IconDishwasher} alt="dishwasher_icon" />
                                </Button>
                            
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="range"
                                    onClick={handleClick}
                                >
                                    Range
                                    <img src={IconRange} alt="oven_icon" />
                                </Button>
                            	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="oven"
                                    onClick={handleClick}
                                >
                                    Oven
                                    <img src={IconOven} alt="oven_icon" />
                                </Button>
                            	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="cooktop"
                                    onClick={handleClick}
                                >
                                    Cooktop
                                    <img src={IconCooktop} alt="cooktop_icon" />
                                </Button>
                            
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="freezer"
                                    onClick={handleClick}
                                >
                                    Freezer
                                    <img src={IconFreezer} alt="freezer_icon"/>
                                </Button>
                            	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="water_heater"
                                    onClick={handleClick}
                                >
                                    Water Heater
                                    <img src={IconWaterHeater} alt="waterheater_icon"/>
                                </Button>
                            
                        </Col>
                        <Col md="4" sm="6" xs="6">
                            
                                <Button color="dark" block className={classes.FlexCol} id="disposal"
                                    onClick={handleClick}
                                >
                                    Disposal
                                    <img src={IconDisposal} 
                                        className={classes.ApplianceIcon} alt="disposal" 
                                    />
                                </Button>
                             	
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="4" sm="6" xs="6" className={classes.Space}>
                            
                                <Button color="dark" block className={classes.FlexCol} id="not_listed"
                                    onClick={handleClick}
                                >
                                    Some Other Appliance 
                                </Button>
                            
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
    );
};


ApplianceSelector.propTypes = {
    addAppliance: PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired,
  };
  
  const mapDispatchToProps = dispatch => {
    return { addAppliance: (id) => dispatch({ type: `ADD_APPLIANCE`, payload: id }),
            clearState: () => dispatch({type: `CLEAR_STATE`})
    };
  };
  

export default connect(null, mapDispatchToProps)(ApplianceSelector);

