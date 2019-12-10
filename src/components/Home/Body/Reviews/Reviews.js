import React, { Component } from 'react';
import {Row , Col, CardDeck} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import classes from './Reviews.module.css';
import CardInfo from './CardInfo/CardInfo';


class Reviews extends Component {
  
	  state= {
	    review: [
	        {
	          starz : 5,
	          title: "Mary Ann Castillo",
	          text: "Awsome staff.Family Oriented. They are hard workers who care about their customers. They also want to do things for the youth and the community.",
	          active: false,
	          date: "11/19"
	        },{
	          starz : 5,
	          title: "Brandon Alonzo",
	          text: "Really nice guys.  They showed up and were friendly and fast. They even took the time to explain what the issue was with my dishwasher in detail and their service was extremely affordable.  I highly recommend them.",
	          active: false,
	          date: "2/19"
	        },{
	          starz : 5,
	          title: "John Birkey",
	          text: "You can't go wrong hiring these guys. Professional, hardworking, and genuinly good people",
	          active: false,
	          date: "12/18"
	        }
	        
	    ],
	    index : 0
	   
	  };
	  
    componentDidMount = () => {
      const intervalId = setInterval(this.cardViews, 3500);
      this.setState({intervalId: intervalId});
    }
	  
	  
    cardViews = () => {

      let arr = this.state.review 

  	  switch(this.state.index){
  				case 0 :
  				        arr[0].active = true;
  								this.setState(prevstate => ({ 
  								  index: prevstate.index + 1,
  								  review: arr
  								}));
  								break;
  				case 1:
  				        arr[0].active = false;
  				        arr[1].active = true;
  								this.setState(prevstate => ({ 
  								  index: prevstate.index + 1,
                    review: arr
  								}));
  								break;
  				case 2:
  				        arr[1].active = false;
  				        arr[2].active = true;
  								this.setState(prevstate => ({ 
  								  index: prevstate.index + 1,
  								  review: arr
  								}));
  								break;
  				case 3:
  				        arr[2].active = false;
  				        arr[0].active = true;
  								this.setState(prevstate => ({ 
  								  index: prevstate.index = 0,
  					        review: arr
  								}));
  								break;
  				default:
  								break;
  			  }
      }
    
	  
	  
		render(){
		  
		  
		  const cardItems = this.state.review.map((item, i) =>
                <CardInfo
                    key= {i}
                    starz ={item.starz}
                    title = {item.title}
                    text = {item.text}
                    active = {item.active}
                    date = {item.date}
                  />
                );
		  
		  
		  return(
  		     <>
            <Row>
              <Col>
                <HeaderText 
                  tag = {2}
              	  text = {"Check Out Our Reviews"}
                />
              </Col>
            </Row>
            <Row className={classes.JustifyContentCenter}>
              <Col md="10">
                <CardDeck>
                  {cardItems}
                </CardDeck>
              </Col>
            </Row>
          </>
		    );
		}
}

export default Reviews;