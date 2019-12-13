import React, { Component } from 'react';
import {Row , Col, CardDeck} from 'reactstrap';
import HeaderText from '../../../Typography/HeaderText/HeaderText';
import classes from './Reviews.module.css';
import CardInfo from './CardInfo/CardInfo';


class Reviews extends Component {
  
	  state= {
	    review: [
	        {
	          id : "first_card",
	          starz : 5,
	          title: "Mary Ann Castillo on Google says:",
	          text: "Awsome staff. Family Oriented. They are hard workers who care about their customers. They also want to do things for the youth and the community.",
	          active: false,
	          date: "One Month Ago"
	        },{
	          id : "second_card",
	          starz : 5,
	          title: "Brandon Alonzo on Google says:",
	          text: "Really nice guys.  They showed up and were friendly and fast. They even took the time to explain what the issue was with my dishwasher in detail and their service was extremely affordable.  I highly recommend them.",
	          active: false,
	          date: "11 Month Ago"
	        },{
	          id : "third_card",
	          starz : 5,
	          title: "John Birkey on Google says:",
	          text: "You can't go wrong hiring these guys. Professional, hardworking, and genuinly good people",
	          active: false,
	          date: "1 Year Ago"
	        }
	        
	    ],
	    index : 0
	   
	  };
	  
    componentDidMount = () => {
      this.setCardInterval();
    }
	  
	  setCardInterval = () =>{
	    const intervalId = setInterval(this.cardViews, 3500);
      this.setState({intervalId: intervalId});
	  }
	  
	  clearCardInterval = () =>{
	    window.clearInterval(this.state.intervalId);
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
      
    onMouseEnterCard = (value) =>{
     
      this.clearCardInterval();
      let arr = this.state.review
      
      switch(value){
        case "first_card":
                arr[0].active = true;
                arr[1].active = false;
                arr[2].active = false;
                this.setState({
                  index : 0,
                  review: arr
                })
                break;
        case "second_card":
                arr[1].active = true;
                arr[0].active = false;
                arr[2].active = false;
                this.setState({
                  index : 1,
                  review: arr
                })
                break;
        case "third_card":
                arr[2].active = true;
                arr[0].active = false;
                arr[1].active = false;
                this.setState({
                  index : 2,
                  review: arr
                })
                break;
        default: 
                break;
      }
    }  
    
    onMouseLeaveCard = () =>{
      this.setCardInterval();
    }
	 
	  onCardClick = (value) => {
	    this.clearCardInterval();
      let arr = this.state.review
      
      switch(value){
        case "first_card":
                arr[0].active = true;
                arr[1].active = false;
                arr[2].active = false;
                this.setState({
                  index : 0,
                  review: arr
                })
                break;
        case "second_card":
                arr[1].active = true;
                arr[0].active = false;
                arr[2].active = false;
                this.setState({
                  index : 1,
                  review: arr
                })
                break;
        case "third_card":
                arr[2].active = true;
                arr[0].active = false;
                arr[1].active = false;
                this.setState({
                  index : 2,
                  review: arr
                })
                break;
        default: 
                break;
      }
	  }
	  
		render(){
		  const cardItems = this.state.review.map((item, i) =>
                <CardInfo
                    key = {i}
                    id = {item.id}
                    starz = {item.starz}
                    title = {item.title}
                    text = {item.text}
                    active = {item.active}
                    date = {item.date}
                    mouseEnterCard = {this.onMouseEnterCard.bind(this)}
                    mouseLeaveCard = {this.onMouseLeaveCard}
                    onCardClick = {this.onCardClick.bind(this)}
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
              <Col md="12">
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