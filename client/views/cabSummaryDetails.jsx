import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header,Sidebar,Menu} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import CarSummary from '../components/carSummary.jsx';
import FlightSummary from '../components/flightSummary.jsx';
import HotelSummary from '../components/hotelSummary.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx'
import {connect} from 'react-redux';

class mainSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      modalState :false

    }
  }

  handleSiderbarVisiblity() {
    if (this.state.sidebarVisiblity) {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'content'});
    } else {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'remove'});
    }
  }

  render(){
    return(
      <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
            <SidebarMenu/>
          </Sidebar>
          <Sidebar.Pusher>
            <div  className='imgHeight vhsidebar' style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>

              <center style={{
                  marginTop: "10px"
                }}>
                <span className="subheaders">Booking Confirmation</span>
                <br/>
                <br/>
              <Segment circular style={{opacity:0.3,width: 55, height: 55}}>
                <Icon size="huge" name="checkmark" />
              </Segment>
              <br/>
              <span className="subheaders">Payment Successful</span><br/>
              <span className="subheaders" style={{fontSize:"12px"}}>Booking ID 1322789</span>
              <Segment style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}}>
              <Grid>
              <Grid.Row>
                <Grid.Column width={2}>
                 <Icon name="taxi" size="big"/>
                </Grid.Column>
                <Grid.Column width={7}>
                 <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>{this.props.match.params.cabname}</span>
                 <br/>
                 <span className="subheaders" style={{color:"white",fontSize:"10px",fontWeight:"bold"}}>01:30 PM,12 Dec - 01:30 PM,14 Dec</span>
                </Grid.Column>
                <Grid.Column width={7}>
                <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Booking ID </span>
                <br/>
                <span className="subheaders" style={{color:"white"}}>1097856</span>
                </Grid.Column>
              </Grid.Row>

               </Grid>
              </Segment>
              <br/>
              <Button inverted as={Link} to="/homepage"><Icon name="home"/>Home</Button>
              </center>

            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}


export default connect(mapStateToProps, null)(mainSummary);
