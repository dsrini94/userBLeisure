import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class UpcomingFlightDetails extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={15}>
            <span style={{fontSize:'18px',fontWeight:'bold'}}>
              Thursday 21st Dec 2017
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={7}>
            <span style={{fontSize:'15px',fontWeight:'bold'}}>Rent out time</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <span style={{fontSize:'15px',fontWeight:'bold',marginLeft:'-4px'}}>21:00 21st Dec 2017</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-16px'}}>
          <Grid.Column width={7}>
            <span style={{fontSize:'15px',fontWeight:'bold'}}>Return time</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <span style={{fontSize:'15px',fontWeight:'bold',marginLeft:'-6px'}}>21:00 23rd Dec 2017</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-16px'}}>
          <Grid.Column width={7}>
            <span style={{fontSize:'17px',fontWeight:'bold'}}>Type of car</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <span style={{fontSize:'17px',fontWeight:'bold'}}>Sedan</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-16px'}}>
          <Grid.Column width={7}>
            <span style={{fontSize:'17px',fontWeight:'bold'}}>Total Fare</span>
          </Grid.Column>
          <Grid.Column width={9}>
            <span style={{fontSize:'17px',fontWeight:'bold'}}>20$</span>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
