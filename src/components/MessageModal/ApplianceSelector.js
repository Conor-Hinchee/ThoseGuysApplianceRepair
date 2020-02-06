import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Container, Row, Col } from 'reactstrap';
import { Link } from 'gatsby-plugin-modal-routing';
import IconCooktop from "../../images/icons/icon_cooktop.svg";
import IconDishwasher from '../../images/icons/icon_dishwasher.svg';
import IconDryer from '../../images/icons/icon_dryer.svg';
import IconFreezer from '../../images/icons/icon_freezer.svg';
import IconFridge from '../../images/icons/icon_fridge.svg';
import IconOven from '../../images/icons/icon_oven.svg';
import IconRange from '../../images/icons/icon_range.svg';
import IconWasher from '../../images/icons/icon_washer.svg';
import IconWaterHeater from '../../images/icons/icon_water_heater.svg';
import IconDisposal  from '../../images/icons/sink-garbage-disposal-kitchen.png';
import classes from "./ApplianceSelector.module.css";

const ModalExample = () => {

  const closeBtn = <Link to="/"><button className="close">&times;</button></Link>;

    return (
        <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>Appliance Selector</ModalHeader>
            <ModalBody>
                <Container>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="fridge">
                                    Fridge
                                    <img src={IconFridge} alt="fridge_icon" />
                                </Button>
                            </Link>
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="washer">
                                    Washer
                                    <img src={IconWasher} alt="washer_icon"/>
                                </Button>
                            </Link>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="dryer">
                                    Dryer
                                    <img src={IconDryer} alt="dryer_icon" />
                                </Button>
                            </Link>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="dishwasher">
                                    Dishwasher
                                    <img src={IconDishwasher} alt="dishwasher_icon" />
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="range">
                                    Range
                                    <img src={IconRange} alt="oven_icon" />
                                </Button>
                            </Link>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="oven">
                                    Oven
                                    <img src={IconOven} alt="oven_icon" />
                                </Button>
                            </Link>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="cooktop">
                                    Cooktop
                                    <img src={IconCooktop} alt="cooktop_icon" />
                                </Button>
                            </Link>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="freezer">
                                    Freezer
                                    <img src={IconFreezer} alt="freezer_icon"/>
                                </Button>
                            </Link>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="water_heater">
                                    Water Heater
                                    <img src={IconWaterHeater} alt="waterheater_icon"/>
                                </Button>
                            </Link>	
                        </Col>
                        <Col md="4" sm="6" xs="6">
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="disposal">
                                    Disposal
                                    <img src={IconDisposal} 
                                        className={classes.ApplianceIcon} alt="disposal" 
                                    />
                                </Button>
                            </Link>  	
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="4" sm="6" xs="6" className={classes.Space}>
                            <Link to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="not_listed">
                                    Some Other Appliance 
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
    );
}

export default ModalExample;