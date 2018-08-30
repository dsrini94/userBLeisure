import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import CarSummaryDetails from './carSummaryDetails.jsx';
export default class carSummary extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
      <Card style={{marginLeft:'auto',marginRight:'auto',marginTop: '20px'}}>
        <Card.Content>
          <Card.Header style={{fontSize:'20px',color:'#800000'}}>
            <center>Car details</center>
          </Card.Header>
          <Segment inverted style={{padding:'1px'}}>
          </Segment>
          <Card.Description>
            <CarSummaryDetails/>

          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
