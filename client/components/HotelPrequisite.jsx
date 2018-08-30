import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Icon, Grid, Image, Header, Form, TextArea, Button, Modal,Checkbox } from 'semantic-ui-react'
import CheckedHandler from './../../redux/actions/hotelCheckedItem.js';
import {HashRouter, Route, Link} from 'react-router-dom';

class HotelPrequisite extends React.Component{

  constructor(props){
    super(props);
    this.state={
      prequisite:"",
      open:false
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  handleChange(e,data){
    this.setState({prequisite:data.value})
  }

  handleClick(){
      this.setState({open:true})
  }

  handleClose(){
    this.setState({open:false,prequisite:""})
  }

  render(){
    var x='';
    if(this.props.notifications.backgroundImage=='../../images/echeckin1.jpg'){
      x='48';
    }
    else if(this.props.notifications.backgroundImage=='../../images/clock.jpg'){
      x='5';
    }
    else if(this.props.notifications.backgroundImage=='../../images/travelling.jpg'){
      x='4';
    }
    else if(this.props.notifications.backgroundImage=='../../images/shopping.jpg'){
      x='3';
    }
    else if(this.props.notifications.backgroundImage=='../../images/airport.jpg'){
      x='2';
    }
    else if(this.props.notifications.backgroundImage=='../../images/inflight.jpg'){
      x='inFlight';
    }
    else if(this.props.notifications.backgroundImage=='../../images/airport1.jpg'){
      x='destAirport';
    }
    else if(this.props.notifications.backgroundImage=='../../images/atcar.jpg'){
      x='inCar';
    }
    else if(this.props.notifications.backgroundImage=='../../images/iStock-165839065.jpg'){
      x='atHotel';
    }
    return(
      <Grid>
        <Grid.Row only='mobile'>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <br/>
            <center>
            <Icon name="hotel" size="massive" inverted /><br/><br/>
            <span className="subheaders" style={{fontSize:'25px'}}>Pre-Arrival Requests</span>
            </center>
            <br/>
            <br/>
            <br/>
            <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
              <Checkbox style={{display:"inline"}} onChange={()=>this.props.handleCheckItems(1)} checked={this.props.notifications.room}/>
              <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Air condition the room to 70F</label>
            </Form.Field>
            <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
              <Checkbox style={{display:"inline"}} onChange={()=>this.props.handleCheckItems(2)} checked={this.props.notifications.burger}/>
              <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>A Chicken Burger with no onions</label>
            </Form.Field>
            <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
              <Checkbox style={{display:"inline"}} onChange={()=>this.props.handleCheckItems(3)} checked={this.props.notifications.towel}/>
              <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>A Hot Compress</label>
            </Form.Field>
            <br/>
            <Form>
              <TextArea placeholder='Enter any other requests' style={{width:"92%",marginLeft:"2%",opacity:0.6}} value={this.state.prequisite} onChange={this.handleChange} />
            </Form>
            <center>
              <Button inverted style={{marginTop:"5%"}} onClick={this.handleClick}><Icon name="check" />Submit</Button>
            </center>

            <Modal basic open={this.state.open} onClose={this.handleClose} style={{width:"91%"}}>
              <Modal.Content>
                <Modal.Description>
                  <span className="subheaders">Your Hotel Pre-arrival requests have been submitted succesfully !</span>
                </Modal.Description>
                <Modal.Description>
                  <center>
                    <Button as={Link} to={`/homepage1/${x}`} icon="close" onClick={this.handleClose} inverted>Close</Button>
                  </center>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
    </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleCheckItems: CheckedHandler,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HotelPrequisite);
