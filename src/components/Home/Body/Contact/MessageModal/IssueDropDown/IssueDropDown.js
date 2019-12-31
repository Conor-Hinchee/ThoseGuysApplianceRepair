import React, { Component } from 'react';
import { ModalBody,Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class IssueDropDown extends Component {
  constructor(props) {
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  
  
  state = {
    dropdownOpen : false,
    fridgeIssues : ["Displaying Error", "Dispenser Not Working", "Leaking", "Not Running", "Noise", "Odor",
      "Too Cold", "Too Warm", "Damaged Physically", "Not Sure"],
    washerIssues : ["Displaying Error", "Display/Buttons Not Working", "Noise Vibration", "Not Filling", 
      "Not Draining", "Not Running", "Stopped During Cycle", "Damaged Physically", "Not Sure"],
    dryerIssues : ["Displaying Error", "Not Drying/Long Dry Times", "Display/Buttons Not Working",
      "Noise Vibration", "Not Heating", "Not Running", "Not Starting", "Stopped During Cycle",
      "Damaged Physically", "Not Sure"],
    dishwasherIssues: ["Displaying Error", "Leaking", "Noise/Vibrations", "Not Cleaning Dishes",
      "Not Draining", "Not Drying Dishes", "Not Starting", "Stopped During Cycle", 
      "Damaged Physically", "Not Sure"],
    rangeIssues : ["Displaying Error", "Cooktop/Burners Not Working(Oven OK)", "Display Not Working", 
      "Unable to Close/Open Door", "No Heat", "Noise", "Oven Not Working(Cooktop/Burners OK)", 
      "Oven Temperature Problem", "Damaged Physically", "Not Sure"],
    ovenIssues : ["Displaying Error", "Display Not Working", "Unable to Close/Open Door", "No Heat",
      "Temperature Problem", "Damaged Physically", "Not Sure"],
    waterHeaterIssues : ["Displaying Error", "Leaking", "No Hot Water", "Not Enough Hot Water",
      "Too Hot", "Low Pressure", "Noise", "Water Odor/Color", "Pilot Won't Light", "Pilot Won't Stay Lit",
      "Burner Won't Stay Lit", "Damaged Physically", "Not Sure"],
    freezerIssues : ["Noise", "Frost Build Up", "Not Running", "Not Cold", "Damaged Physically", "Not Sure"],
    cookTopIssues : ["Displaying Error", "Scratched/Cracked", "Slow/Uneven Cooking", "Not Heating", 
      "Damaged Physically", "Not Sure"],
    disposalIssues : ["Not Working", "Jammed/Jamming", "Won't Shut Off", "Noise", "Damaged Physically", "Not Sure"],
    unknownIssues : ["Displaying Error", "Noise/Vibration", "Not Starting", "Will Not Shut Off", 
    "Damaged Physically", "Not Sure"]
  };
  
  
  toggleDropDown = ()=>{
    this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  render(){
    return(
      <ModalBody>
        <Container>
          <Row className="justify-content-center">
            <Col md="6" className="justify-content-center">
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} size="block" >
                <DropdownToggle caret>
                  Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Col>
          </Row>
        </Container>
      </ModalBody>   
    );
  }
  
}

export default IssueDropDown;