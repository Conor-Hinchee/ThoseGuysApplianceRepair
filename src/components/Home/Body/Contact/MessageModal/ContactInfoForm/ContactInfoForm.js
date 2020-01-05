import React, { Component } from 'react';
import classes from './ContactInfoForm.module.css';
import {Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContactInfoForm extends Component {
  constructor(props) {
        super(props);
        
    this.handleFormChange = this.handleFormChange.bind(this);
    this.checkFormValues = this.checkFormValues.bind(this);
  }
  
  state = {
  	fName : "",
	lName : "",
	phoneNumber : "",
	address : "",
	address2 : "",
	city : "",
	zipCode : "",
	shouldBtnMount: false
  };
  
  
  handleFormChange = (e) =>{
  	const alphaOnly = /^[a-zA-Z]+$/;
  	const numbersOnly = /^\d+$/;
  	
  	
  	switch(e.target.id){
  		case "fName":
  			if(alphaOnly.test(e.target.value) || e.target.value === ""){
  				this.setState({
  					fName: e.target.value
  				});
  			}
  			break;
		case "lName":
			if(alphaOnly.test(e.target.value) || e.target.value === ""){
  				this.setState({
  					lName: e.target.value
  				});
  			}
			break;
		case "phoneNumber":
			if(numbersOnly.test(e.target.value) || e.target.value === ""){
				this.setState({
					phoneNumber: e.target.value
				});
			}
			break;
		case "inputAddress":
			this.setState({
				inputAddress: e.target.value
			});
			break;
		case "inputAddress2":
			this.setState({
				inputAddress2: e.target.value
			});
			break;
		case "inputCity":
			if(alphaOnly.test(e.target.value) || e.target.value === ""){
				this.setState({
					inputCity: e.target.value
				});
			}
			break;
		case "inputZip":
			if(numbersOnly.test(e.target.value) || e.target.value === ""){
				this.setState({
					inputZip: e.target.value
				});
			}
			break;
  		default:	
  			break;
  	}
  	
  	this.checkFormValues();
  }
  
  checkFormValues = () =>{
  	if(this.state.fName !== "" && this.state.lName !== "" && this.state.phoneNumber !== ""
  		&& this.state.address !== "" && this.state.address2 !== "" && this.state.city !== ""
  		&& this.state.zipCode !== ""
  	){
  		this.setState({shouldBtnMount: true});
  	}else{
  		this.setState({shouldBtnMount: false});
  	}
  }
  
  render(){
    return(
    	<Container>
    		<Form autocomplete="on">
		      <Row form>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="fName">First Name</Label>
		            <Input onChange={this.handleFormChange} value={this.state.fName}
		            	type="text" name="firstName" id="fName" placeholder="John" />
		          </FormGroup>
		        </Col>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="lName">Last Name</Label>
		            <Input onChange={this.handleFormChange} value={this.state.lName}
		            	type="text" name="LastName" id="lName" placeholder="Smith" />
		          </FormGroup>
		        </Col>
		      </Row>
		      <FormGroup>
		        <Label for="phoneNumber">Phone Number</Label>
		        <Input onChange={this.handleFormChange} value={this.state.phoneNumber}
		        	type="text" name="phoneNumber" id="phoneNumber" placeholder="(575) 555-5555"/>
		      </FormGroup>
		      <FormGroup>
		        <Label for="inputAddress">Address</Label>
		        <Input onChange={this.handleFormChange} value={this.state.inputAddress}
		        	type="text" name="address" id="inputAddress" placeholder="1234 Main St"/>
		      </FormGroup>
		      <FormGroup>
		        <Label for="inputAddress2">Address 2</Label>
		        <Input onChange={this.handleFormChange} value={this.state.inputAddress2}
		        	type="text" name="address2" id="inputAddress2" placeholder="1234 Main St"/>
		      </FormGroup>
		      <Row form>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="inputCity">City</Label>
		            <Input onChange={this.handleFormChange} value={this.state.inputCity} 
		            	type="text" name="city" id="inputCity" placeholder="Clovis" />
		          </FormGroup>
		        </Col>
		        
		        <Col md={{ size: '2', offset: 4 }}>
		          <FormGroup>
		            <Label for="inputZip">Zip</Label>
		            <Input onChange={this.handleFormChange} value={this.state.inputZip} 
		            	type="text" name="zip" id="inputZip"/>
		          </FormGroup>  
		        </Col>
		      </Row>
		      
		      
		      <div className={classes.FlexEnd}>
	    		{this.state.shouldBtnMount ? 
	      			<Button >Send Message</Button>
	      			:
	      			<></>
	    		}
		      </div>
		      
		      
		    </Form>
    	</Container>
    );
  }
  
}

export default ContactInfoForm;