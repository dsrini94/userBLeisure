import React from 'react';
import WalletComponent from './../components/walletComponent.jsx'
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Grid
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import SwipeableViews from 'react-swipeable-views';
import BoardingPass from './../components/boardingPass.jsx';
import HotelBoardingPass from './../components/hotelBoardingPass.jsx';
import HeaderComponent from './../components/header.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const obj=[{
  from:'DFW',
  to:'PHX',
  fromAbbrevation:'Dallas Fort Worth',
  toAbbrevation:'Phoenix',
  time:'17:20',
  arrives:'20:20',
  flightNo:'XX103',
  pnr:'D94ENF',
  day:7
},
{
  from:'MIA',
  to:'DEN',
  fromAbbrevation:'Miami',
  toAbbrevation:'Denver',
  time:'12:20',
  arrives:'06:20',
  flightNo:'XX123',
  pnr:'F94END',
  day:14
}]

class Wallet extends React.Component {

  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      modalState :false,slideIndex: 0,
      activeItem: 'Flight'

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

  handleItemClick(e, {name}) {
    if (name == 'Flight')
      this.setState({activeItem: name, slideIndex: 0});
    else if (name == 'Hotel')
      this.setState({activeItem: name, slideIndex: 1});
    else
      this.setState({activeItem: name, slideIndex: 2});

    }

  render() {
    return (<div >
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
            <br/>
            <center>
            <span className="subheaders" style={{fontSize:"25px"}}>Digital Wallet</span>
            </center>
            <Menu pointing secondary inverted>
              <Menu.Item name='Flight' className="subheaders" active={this.state.activeItem === 'Flight'} onClick={this.handleItemClick.bind(this)}/>
              <Menu.Item name='Hotel' className="subheaders" active={this.state.activeItem === 'Hotel'} onClick={this.handleItemClick.bind(this)}/>
              <Menu.Item name='Car' className="subheaders" active={this.state.activeItem === 'Car'} onClick={this.handleItemClick.bind(this)}/>
            </Menu>

            <SwipeableViews index={this.state.slideIndex} disabled>
              <div>
              <BoardingPass obj={obj[0]}/>
              </div>

              <div>
                <HotelBoardingPass />
              </div>
              <div>
              <center style={{
                  marginTop: "10px"
                }}>
                <span className="subheaders" style={{fontSize:"25px"}}>Booking Confirmed</span>
                <br/>
              <br/>
              <span className="subheaders">Booking ID 1097856</span><br/>
              <Segment style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
              <Grid >
              <Grid.Row>
                <Grid.Column width={2}>
                 <Icon name="taxi" size="big"/>
                </Grid.Column>
                <Grid.Column width={7}>
                 <span className="subheaders" style={{color:"white",fontSize:"14px",fontWeight:"bold"}}>Hertz Cars</span>
                 <br/>
                 <span className="subheaders" style={{color:"white",fontSize:"11px",fontWeight:"bold"}}>Pick up: 01:30 PM, 12 Dec </span>
                 <br/>
                 <span className="subheaders" style={{color:"white",fontSize:"11px",fontWeight:"bold"}}>Drop: 01:30 PM, 14 Dec </span>
                </Grid.Column>
                <Grid.Column width={7}>
                <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Booking ID 1097856</span>
                </Grid.Column>
              </Grid.Row>

               </Grid>
              </Segment>
              </center>

              </div>
            </SwipeableViews>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Wallet);
