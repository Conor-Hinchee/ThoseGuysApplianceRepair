import React, { Component } from 'react';
import classes from './ContactInfoForm.module.css';
import {Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class ContactInfoForm extends Component {
  constructor(props) {
        super(props);
        
  }
  
  state = {
  	fName : "",
	lName : "",
	phoneNumber : "",
	address : "",
	address2 : "",
	city : "",
	zipCode : "",
	shouldBtnMount: true
  };
  
  
  
  render(){
    return(
    	<Container>
    		<Form autocomplete="on">
		      <Row form>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="inputFirstName">First Name</Label>
		            <Input type="text" name="firstName" id="inputFirstName" placeholder="John" />
		          </FormGroup>
		        </Col>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="inputLastName">Last Name</Label>
		            <Input type="text" name="LastName" id="inputLastName" placeholder="Smith" />
		          </FormGroup>
		        </Col>
		      </Row>
		      <FormGroup>
		        <Label for="inputPhone">Phone Number</Label>
		        <Input type="text" name="phoneNumber" id="inputPhone" placeholder="(575)555-5555"/>
		      </FormGroup>
		      <FormGroup>
		        <Label for="inputAddress">Address</Label>
		        <Input type="text" name="address" id="inputAddress" placeholder="1234 Main St"/>
		      </FormGroup>
		      <FormGroup>
		        <Label for="inputAddress2">Address 2</Label>
		        <Input type="text" name="address2" id="inputAddress2" placeholder="1234 Main St"/>
		      </FormGroup>
		      <Row form>
		        <Col md={6}>
		          <FormGroup>
		            <Label for="inputCity">City</Label>
		            <Input type="text" name="city" id="inputCity" placeholder="Clovis" />
		          </FormGroup>
		        </Col>
		        
		        <Col md={{ size: '2', offset: 4 }}>
		          <FormGroup>
		            <Label for="inputZip">Zip</Label>
		            <Input type="text" name="zip" id="inputZip"/>
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