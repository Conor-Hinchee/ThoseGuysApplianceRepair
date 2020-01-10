import React, { Component } from 'react';
import {Row , Col, CardDeck} from 'reactstrap';
import HeaderText from '../../../UI/Typography/HeaderText/HeaderText';
import classes from './Reviews.module.css';
import CardInfo from './CardInfo/CardInfo';


class Reviews extends Component {
  
	  state= {
	    review: [
	        {
	          id : "first_card",
	          starz : 5,
	          title: "Mary Ann on Google says:",
	          text: "Awesome staff. Family Oriented. They are hard workers who care about their customers. They also want to do things for the youth and the community.",
	          active: false,
	          date: "1 Month Ago"
	        },{
	          id : "second_card",
	          starz : 5,
	          title: "Cindy H on Yelp says:",
	          text: "David Pearson is very capable and good to deal with. I am very impressed with how smart he is and how well he explains and figures out things. I would recommended Those Guys Appliance Repair to any of my friends.",
	          active: false,
	          date: "1 Year Ago"
	        },{
	          id : "third_card",
	          starz : 5,
	          title: "Jessica CR on Facebook says:",
	          text: "Those Guys live to serve, and serve our country several did in the US military. The workers are the most unselfish, efficient people ready to get the job done and done right! They are very reasonably priced and can do most things. Just ask!",
	          active: false,
	          date: "1 Year Ago"
	        }
	        
	    ],
	    index : 0,
	    intervalSet: false
	  };
	  
    componentDidMount = () => {
      this.setCardInterval();
    }
	  
	  setCardInterval = () =>{

	    if(!this.state.intervalSet){
	      
	      this.setState({
	        intervalSet: true
	      }, () => {
	          const intervalId = setInterval(this.cardViews, 3500);
            this.setState({
              intervalId: intervalId
            });
	      })
	  }
	  }
	  
	  clearCardInterval = () =>{
	    window.clearInterval(this.state.intervalId);
	    this.setState({
	      intervalId: "",
        intervalSet: false
	    })
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
              <Col md="12" sm="10">
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