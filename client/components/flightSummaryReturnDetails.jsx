import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class flightSummaryOnwardDetails extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <center>
            <span style={{fontSize:'23px',fontWeight:'600',textDecoration:'underline',color:'#800000'}}>Return Journey</span>
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-15px'}}>
          <Grid.Column width={4}>
            <span style={{fontSize:'15px',fontWeight:'600'}}>FL5862</span>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <span style={{fontSize:'14px',fontWeight:'600',float:'right'}}>Boeing 742</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-15px'}}>
          <Grid.Column>
            <span style={{fontSize:'17px',fontWeight:'bold'}}>Sunday, 24st Dec 2017</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-15px'}}>
          <Grid.Column width={6}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>XYZ</span>
          </Grid.Column>
          <Grid.Column width={7}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>18:20</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-26px'}}>
          {/* <Grid.Column></Grid.Column> */}
          <Grid.Column>
            <Icon name='plane' style={{color:'#800000',marginLeft:'3px',fontSize:'20px'}} />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-28px'}}>
          <Grid.Column width={6}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>ABC</span>
          </Grid.Column>
          <Grid.Column width={7}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>20:20</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-15px'}}>
          <Grid.Column width={8}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>Travel Time</span>
          </Grid.Column>
          <Grid.Column width={2} style={{marginLeft:'-35px'}}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>2h0m</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-5px'}}>
          <Grid.Column width={6}>
            <span style={{fontSize:'16px',fontWeight:'bolder'}}>Meal</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span style={{fontSize:'15px',fontWeight:'500'}}>Non Veg Meal</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-18px'}}>
          <Grid.Column  width={6}>
            <span style={{fontSize:'16px',fontWeight:'bolder'}}>Seat no</span>
          </Grid.Column>
          <Grid.Column width={2}>
            <span style={{fontSize:'15px',fontWeight:'500'}}>25A</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <span style={{fontSize:'16px',fontWeight:'bold'}}>Total Fare</span>
          </Grid.Column>
          <Grid.Column width={7}>
            <span style={{fontSize:'14px',fontWeight:'bold'}}>$600</span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
)
}
}
