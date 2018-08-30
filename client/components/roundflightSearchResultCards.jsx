import React from 'react';
import SelectedFlightModal from './selectedFlightModal.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

import {
  Button,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider,
  Segment,
  Modal,
  Input
} from 'semantic-ui-react';


export default class FlightSearchResultCards extends React.Component {

constructor(props)
{
  super(props);
  this.state={open:false}
}
  handleModal()
  {
    this.setState({open:!this.state.open});
  }

  render() {
    var datevalue='';
    if(this.props.value =='1'){
      datevalue=new Date(new Date().setUTCDate(new Date().getDate())).toDateString()
    }
    else if(this.props.value=='2'){
        datevalue=new Date(new Date().setUTCDate(new Date().getDate()+7)).toDateString()
    }
    else if(this.props.value=='3'){
        datevalue=new Date(new Date().setUTCDate(new Date().getDate()+8)).toDateString()
    }
    else if(this.props.value=='4'){
        datevalue=new Date(new Date().setUTCDate(new Date().getDate()+9)).toDateString()
    }
    else if(this.props.value=='5'){
        datevalue=new Date(new Date().setUTCDate(new Date().getDate()+10)).toDateString()
    }
    // console.log(this.props);
    return (<div>
      <Card fluid style={{
                    background:"url(./../../images/las50croppeddarkened.jpg)",
                    marginTop:"auto",
                  boxShadow:'none'}}>
        <Card.Content>

          <Card.Description>
          <Grid>
          <Grid.Row style={{marginBottom:"-20px"}}>
            <Grid.Column>
            <Header as="h6" style={{color:"white"}}>{this.props.time}</Header>
            </Grid.Column>
          </Grid.Row>
            <Grid.Row >
              <Grid.Column>
              <Header as="h6" style={{color:"white"}}>Seat  {this.props.seatNo} Terminal  4 Gate 1</Header>
              <Header as="h6" style={{marginTop:"-45px"}} inverted floated="right">Duration 2.5 Hrs</Header>
              </Grid.Column>

            </Grid.Row>
            <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
              <Grid.Column width={6}>
              <center>
                  <Header style={{color:'white',fontSize:"25px"}}>{this.props.from}</Header>
              </center>
              </Grid.Column>
              <Grid.Column width={4}>
              <center>
              <Header style={{fontSize:'12px',color:'white',border:'none',marginBottom:'0px',marginTop:'-10px'}}>{this.props.flightNo}</Header>
              <Icon name='long arrow right' style={{color:'white'}} size="large"/>
              </center>
              </Grid.Column>
              <Grid.Column width={6}>
              <center>
                <Header style={{color:'white',fontSize:"25px",margin:"0px"}}>{this.props.to}</Header>
                </center>
              </Grid.Column>
            </Grid.Row>


            <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
              <Grid.Column width={6}>
              <center>
                  <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{this.props.fromDetail} International Airport</Header>
              </center>
              </Grid.Column>
              <Grid.Column width={4}>
              <center>
              </center>
              </Grid.Column>
              <Grid.Column width={6}>
              <center>
                <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{this.props.toDetail} International Airport</Header>
                </center>
              </Grid.Column>
            </Grid.Row>
            </Grid>
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <center>
            <Link to={`/RoundselectedFlight/${'RoundTrip'}`}>
            <Button size="tiny" color="red" style={{marginTop:"-5px"}}>Select</Button>
            </Link>
          </center>
        </Card.Content>
    </Card>
    <br/>
    </div>);
  }
}
