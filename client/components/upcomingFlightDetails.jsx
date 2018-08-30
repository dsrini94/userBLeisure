import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class UpcomingFlightDetails extends React.Component {
  constructor() {
    super();
  }
  render(){
    var iconvalue='';
    var linkvalue='';
    if(this.props.way=='OneWay'){
      iconvalue='plane';
      linkvalue='OneWay';
    }
    else if(this.props.way=='RoundTrip'){
      iconvalue='resize horizontal';
      linkvalue='RoundTrip';
    }
    return(
        <Card>
          <Card.Content>
            <Card.Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <center>
                      <Header as='h3' style={{color:'sienna'}}>{this.props.upcomingFrom}</Header>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                  <center>
                  <Header style={{fontSize:'9px',color:'#800000'}} as='h6'>{this.props.flighNumber}</Header>
                  </center>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <center>
                    <Header as='h3' style={{color:'sienna'}}>{this.props.upcomingTo}</Header>
                    </center>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-28px'}}>
                  <Grid.Column width={6}>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <center>
                      <Icon name={iconvalue} style={{color:'#800000'}}/>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={6}>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-36px'}}>
                  <Grid.Column width={6}>
                    <center>
                      <Header as='h5'>{this.props.upcomingFromDetail}</Header>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={3}>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <center>
                      <Header as='h5'>{this.props.upcomingToDetail}</Header>
                    </center>
                  </Grid.Column>

                </Grid.Row>

              </Grid>

              </Card.Header>
              <Card.Description>
            <Grid>
                <Grid.Row >
                  <Grid.Column width={7}>
                    <Header as='h6'>{this.props.date}</Header>
                  </Grid.Column>
                  <Grid.Column width={6}>
                      <Header as='h6'>{this.props.time}</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <center>
                      <Header as='h6'>1h0m</Header>
                    </center>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-12px'}}>
                  <Grid.Column width={10}>
                  <Header as='h6'>
                    <a style={{color:'black',textDecoration:'underline'}}> Resend itenary via email</a>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={5}></Grid.Column>
                </Grid.Row>
              </Grid>
              </Card.Description>
          {/* </Card.Content>
          <Card.Content extra> */}
          <Segment inverted style={{padding:'1px'}}>
          </Segment>
            <Grid>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Header as='h5'>Booking No</Header>
                </Grid.Column>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h5'>H16PGW</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{marginTop:'-23px'}}>

                <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
            </Grid>
            <Link to={`/SelectedSuggestedFlightComponent/${linkvalue}/${this.props.upcomingFrom}/${this.props.upcomingTo}`}>
            <Button fluid  style={{marginTop:'8px',backgroundColor:'#800000',color:'white'}}>Modify</Button>
            </Link>
          </Card.Content>
        </Card>
    )
  }
}
