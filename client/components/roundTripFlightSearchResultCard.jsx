import React from 'react';
import {
  Button,
  Icon,
  Header,
  Card,
  Grid,
  Divider,
  Segment,
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class RoundTripFlightSearchResultCard extends React.Component
{
  render()
  {
    return(
      <div>
      <Card fluid color='red' style={{marginBottom:'10px'}}>
        <Card.Content>
          <Card.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <center>
                    <span className='accronym'>{this.props.from}</span>
                  </center>
                </Grid.Column>
                <Grid.Column width={7}>
                  <center>
                    <Icon name='resize horizontal' color='red' className='journeySymbol'/>
                  </center>
                </Grid.Column>
                <Grid.Column width={4}>
                  <center>
                    <span className='accronym'>{this.props.to}</span>
                  </center>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Header>
          <Segment inverted style={{
              padding: '1px'
            }}></Segment>
          <Card.Description>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <center>
                    <Header as='h6'>{this.props.from} - {this.props.to}</Header>
                  </center>
                </Grid.Column>
                <Grid.Column width={3}>
                <center>
                <Header as='h6'>Non Stop</Header>
                </center>
                </Grid.Column>
                <Grid.Column width={9}>
                <center>
                  <Header as='h6' style={{margin:'5px'}}>DEP : Thu 14,Dec 10:55 PM  </Header>
                  <Header as='h6' style={{margin:'5px'}}>ARR : Thu 14,Dec 18:55 PM  </Header>
                  </center>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
          <Segment inverted style={{padding: '0.5px'}}></Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <center>
                  <Header as='h6'>{this.props.to} - {this.props.from}</Header>
                </center>
              </Grid.Column>
              <Grid.Column width={3}>
              <center>
              <Header as='h6'>Non Stop</Header>
              </center>
              </Grid.Column>
              <Grid.Column width={9}>
              <center>
                <Header as='h6' style={{margin:'0px'}}>DEP : Thu 21,Dec 10:55 PM  </Header>
                <Header as='h6' style={{margin:'0px'}}>ARR : Thu 21,Dec 18:55 PM  </Header>
                </center>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br/>
          </div>
            <Button as={Link} to={`/selectedFlight/${'RoundTrip'}`} fluid inverted style={{backgroundColor:'#800000'}} >Select Flight</Button>
        </Card.Content>
      </Card>
      </div>);
  }
}
