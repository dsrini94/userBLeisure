import React from 'react';
import {
  Card,
  Icon,
  Header,
  Grid,
  Segment,
  Label,
  Button
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class SuggestedCards extends React.Component {
  render() {
    var iconvalue='';
    var linkvalue='';
    if(this.props.way=='RoundTrip'){
      iconvalue='resize horizontal';
      linkvalue='RoundTrip';
    }
    else if(this.props.way=='OneWay'){
      iconvalue='plane'
      linkvalue='OneWay'
    }
    return (
      <div>
        <Card style={{margin:'10px'}}>
          <Card.Content>
            <Card.Header>
              <Grid>
                <Grid.Row >
                  <Grid.Column width={12}>
                    <Header as='h5' style={{
                        color: '#800000'
                      }}>{this.props.date}</Header>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header as='h5' color='green'>Total $2400</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Header>
            <Card.Description>

              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header as='h5'>{this.props.onwardFrom}</Header>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Icon name='plane' style={{
                        color: '#800000'
                      }}></Icon>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Header as='h5'>{this.props.onwardTo}</Header>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header as='h5' color='green' style={{float:'right'}}>$1200</Header>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{border:'none',margin:'0px',padding:'5px'}}>
                  <Grid.Column width={8}>
                    <Header as='h6' style={{border:'none',margin:'0px'}}>14,Dec 10:55 PM</Header>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Header as='h6' style={{border:'none',margin:'0px'}}>14,Dec 18:55 PM</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>


              <Segment inverted style={{border:'none',
                  padding: '1px'
                }}/>

                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Header as='h5'>{this.props.returnFrom}</Header>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Icon name={'plane'} style={{
                          color: '#800000'
                        }}></Icon>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Header as='h5'>{this.props.returnTo}</Header>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Header as='h5' color='green' style={{float:'right'}}>$1200</Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row style={{border:'none',margin:'0px',padding:'5px'}}>
                    <Grid.Column width={8}>
                      <Header as='h6' style={{border:'none',margin:'0px'}}>14,Dec 10:55 PM</Header>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <Header as='h6' style={{border:'none',margin:'0px'}}>14,Dec 18:55 PM</Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button as={Link} to={`/SelectedSuggestedFlightComponent/${linkvalue}/${this.props.onwardFrom}/${this.props.onwardTo}`} inverted fluid style={{backgroundColor: '#800000'}}>
              1 click book
            </Button>
          </Card.Content>
        </Card>
      </div>);
  }
}
