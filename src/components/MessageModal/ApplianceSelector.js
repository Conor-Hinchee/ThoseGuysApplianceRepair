import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, Container, Row, Col } from 'reactstrap';
import { Link } from 'gatsby-plugin-modal-routing';
import GatsbyLink from  "gatsby-link";
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

    const closeBtn = <Link to="/"><button className="close">&times;</button></Link>;

    return (
        <Modal isOpen={true} >
            <ModalHeader close={closeBtn}>Appliance Selector</ModalHeader>
            <ModalBody>
                <Container>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            
                                <Button color="dark" block className={classes.FlexCol} id="fridge"
                                    onClick={props.addAppliance}
                                >
                                    Fridge
                                    <img src={IconFridge} alt="fridge_icon" />
                                </Button>
                            
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="washer"
                                    onClick={props.addAppliance}
                                >
                                    Washer
                                    <img src={IconWasher} alt="washer_icon"/>
                                </Button>
                            </GatsbyLink>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="dryer"
                                    onClick={props.addAppliance}
                                >
                                    Dryer
                                    <img src={IconDryer} alt="dryer_icon" />
                                </Button>
                            </GatsbyLink>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="dishwasher"
                                    onClick={props.addAppliance}
                                >
                                    Dishwasher
                                    <img src={IconDishwasher} alt="dishwasher_icon" />
                                </Button>
                            </GatsbyLink>
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="range"
                                    onClick={props.addAppliance}
                                >
                                    Range
                                    <img src={IconRange} alt="oven_icon" />
                                </Button>
                            </GatsbyLink>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="oven"
                                    onClick={props.addAppliance}
                                >
                                    Oven
                                    <img src={IconOven} alt="oven_icon" />
                                </Button>
                            </GatsbyLink>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="cooktop"
                                    onClick={props.addAppliance}
                                >
                                    Cooktop
                                    <img src={IconCooktop} alt="cooktop_icon" />
                                </Button>
                            </GatsbyLink>	
                        </Col>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="freezer"
                                    onClick={props.addAppliance}
                                >
                                    Freezer
                                    <img src={IconFreezer} alt="freezer_icon"/>
                                </Button>
                            </GatsbyLink>	
                        </Col>
                    </Row>
                    <Row className={classes.Space}>
                        <Col md="4" sm="6" xs="6" className="justify-content-center">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="water_heater"
                                    onClick={props.addAppliance}
                                >
                                    Water Heater
                                    <img src={IconWaterHeater} alt="waterheater_icon"/>
                                </Button>
                            </GatsbyLink>	
                        </Col>
                        <Col md="4" sm="6" xs="6">
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="disposal"
                                    onClick={props.addAppliance}
                                >
                                    Disposal
                                    <img src={IconDisposal} 
                                        className={classes.ApplianceIcon} alt="disposal" 
                                    />
                                </Button>
                            </GatsbyLink>  	
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="4" sm="6" xs="6" className={classes.Space}>
                            <GatsbyLink to={"/repair/appliance-issue"} 
                                state={{
                                    modal: true
                                }}
                            >
                                <Button color="dark" block className={classes.FlexCol} id="not_listed"
                                    onClick={props.addAppliance}
                                >
                                    Some Other Appliance 
                                </Button>
                            </GatsbyLink>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
    );
}


ApplianceSelector.propTypes = {
    appliance: PropTypes.array.isRequired,
    updateArray: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = ({ appliance }) => {
    return { appliance };
  };
  
  const mapDispatchToProps = dispatch => {
      alert("called");
    return { addAppliance: (e) => dispatch({ type: `ADD_APPLIANCE`, payload: e.target.id }) };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(ApplianceSelector);

