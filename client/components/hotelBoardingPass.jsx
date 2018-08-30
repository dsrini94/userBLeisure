import React from 'react';
import {Segment, Button, Card, Image,Icon,Header,Grid } from 'semantic-ui-react'
import {HashRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HotelBoardingPass extends React.Component {


  render() {

    return (<div>
      <center style={{
          marginTop: "10px"
        }}>
        <span className="subheaders" style={{fontSize:"25px"}}>Booking Confirmed</span>
        <br/>
      <br/>
      <span className="subheaders">Booking ID 1322789</span><br/>
      <Segment style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
      <Grid>
      <Grid.Row>
        <Grid.Column width={2}>
         <Icon name="building" size="big"/>
        </Grid.Column>
        <Grid.Column width={7}>
         <span className="subheaders" style={{color:"white",fontSize:"14px",fontWeight:"bold"}}>Hotel Continental</span>
         <br/>
         <span className="subheaders" style={{color:"white",fontSize:"11px",fontWeight:"bold"}}>CheckIn: 12:00 PM, 12 Dec</span>
         <br/>
         <span className="subheaders" style={{color:"white",fontSize:"11px",fontWeight:"bold"}}>Checkout: 12:00 PM, 14 Dec</span>
        </Grid.Column>
        <Grid.Column width={7}>
        <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Booking ID 1322789</span>
        <br/>
        <br/>
        <Button as={Link} color="black"  to='/digitalKey'><Icon name='key'/>Digital Key</Button>
        </Grid.Column>
      </Grid.Row>

       </Grid>
      </Segment>

      </center>


    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(HotelBoardingPass);
