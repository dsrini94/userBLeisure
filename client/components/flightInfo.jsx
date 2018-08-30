import React from 'react';

import {
  Card,
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Carousel from 'nuka-carousel';
import {HashRouter, Route, Link} from 'react-router-dom';

class FlightInfo extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Carousel dragging={true} wrap={false} edgeEasing="easeOutCirc" style={{height:'250px'}}>
      {this.props.notifications.travelData.map((item,i)=>{
        return(
        <div  key={i} style={{padding:"10px"}}>
        <Card fluid style={{
                      backgroundImage:"url(path.resolve(./../../istock/phx.jpg))",
                      marginTop:"auto"}}>
          <Card.Content>

            <Card.Description>
            <Grid>
            <Grid.Row style={{marginBottom:"-20px"}}>
              <Grid.Column>
              <Header as="h6" style={{color:"white"}}>{item.date} 17:20</Header>
              </Grid.Column>
            </Grid.Row>
              <Grid.Row >
                <Grid.Column>
                <Header as="h6" style={{color:"white"}}>Seat  {item.Seat} Terminal  {item.Terminal} Gate {item.Gate}</Header>
                <Header as="h6" style={{marginTop:"-45px"}} inverted floated="right">Duration {item.tt}</Header>
                </Grid.Column>

              </Grid.Row>
              <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                <Grid.Column width={6}>
                <center>
                    <Header style={{color:'white',fontSize:"25px"}}>{item.source}</Header>
                </center>
                </Grid.Column>
                <Grid.Column width={4}>
                <center>
                <Header style={{fontSize:'12px',color:'white',border:'none',marginBottom:'0px',marginTop:'-10px'}}>{item.flightNo}</Header>
                <Icon name='long arrow right' style={{color:'white'}} size="large"/>
                </center>
                </Grid.Column>
                <Grid.Column width={6}>
                <center>
                  <Header style={{color:'white',fontSize:"25px",margin:"0px"}}>{item.destination}</Header>
                  </center>
                </Grid.Column>
              </Grid.Row>


              <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                <Grid.Column width={6}>
                <center>
                    <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.sourceName}</Header>
                </center>
                </Grid.Column>
                <Grid.Column width={4}>
                <center>
                </center>
                </Grid.Column>
                <Grid.Column width={6}>
                <center>
                  <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.destinationName}</Header>
                  </center>
                </Grid.Column>
              </Grid.Row>
              </Grid>
            </Card.Description>

          </Card.Content>
          <Card.Content extra>
            <center>
              <Link to={`/SelectedSuggestedFlightComponent/${'OneWay'}/${item.source}/${item.destination}`}>
              <Button size="tiny" color="red" style={{marginTop:"-5px"}}>Modify</Button>
              </Link>
            </center>
          </Card.Content>
      </Card>
      </div>
    )
  })}
      </Carousel>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(FlightInfo);
