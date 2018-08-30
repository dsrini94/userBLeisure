import React from 'react';

import {
  Card,
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react';

import Carousel from 'nuka-carousel';
import {HashRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class SuggestedInfo extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Carousel dragging={true} wrap={false} edgeEasing="easeOutCirc" style={{height:'250px'}}>
      {
        this.props.notifications.suggestedData.map((item,i)=>{
          return(
          <div  key={i} style={{padding:"10px"}}>
          <Card fluid style={{marginTop:"auto",background:"url("+item.image+")"}}>
            <Card.Content>
              <Card.Description>
              <Grid>
                  <Grid.Row>
                    <Grid.Column>
                        <Header as="h5" style={{float:'left',color:"white"}}>{item.class}</Header>
                    </Grid.Column>
                  </Grid.Row>
                <Grid.Row style={{marginTop:"-12px"}}>
                  <Grid.Column width={7}>
                      <Header as="h5" style={{float:'left',color:"white"}}>{item.way}</Header>
                  </Grid.Column>
                  <Grid.Column width={8} style={{float:'right'}}>
                   <Header as="h5" style={{float:'right',color:"white"}}>$2400</Header>
                  </Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row>
                <Grid.Row style={{marginTop:"-12px"}}>
                  <Grid.Column width={6}>

                      <Header style={{color:'white',fontSize:"25px"}}>{item.source}</Header>

                  </Grid.Column>
                  <Grid.Column width={4}>
                  <center>
                  {/* <Header style={{fontSize:'12px',color:'white'}}>{item.flightNo}</Header> */}
                  <Icon name='resize horizontal' style={{color:'white'}} size="large"/>
                  </center>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <center>
                    <Header style={{color:'white',fontSize:"25px"}}>{item.destination}</Header>
                    </center>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:"-12px"}}>
                  <Grid.Column width={7}>
                    <center>
                    <Header style={{color:'white',fontSize:"12px",marginBottom:'13px'}}>{item.time1}</Header>
                    </center>
                    <center>
                    <Header style={{color:'white',fontSize:"12px"}}>{item.date}</Header>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={2}>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <center>
                    <Header style={{color:'white',fontSize:"12px",marginBottom:'13px'}}>{item.time2}</Header>
                    </center>
                    <center>
                    <Header style={{color:'white',fontSize:"12px"}}>{item.date1}</Header>
                    </center>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{marginTop:'-24px'}}>
                <Grid.Column>
                <center>
                  <Link to={`/SelectedSuggestedFlightComponent/${'OneWay'}/${item.source}/${item.destination}`}>
                  <Button size="tiny" color="red">Book</Button>
                  </Link>
                </center>
                </Grid.Column>
                </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
        </Card>
        </div>
      )
        })
      }
      </Carousel>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(SuggestedInfo);
