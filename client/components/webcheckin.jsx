import React, { Component } from 'react'
import { friendOptions } from './commons.js'
import {Link} from 'react-router-dom'
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar,Card} from 'semantic-ui-react'
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const seatOptions = [
  { key: 'window', text: 'Window', value: 'Window' },
  { key: 'mid', text: 'Middle', value: 'Middle' },
  { key: 'aisle', text: 'Aisle', value: 'Aisle' },
]


const mealOptions = [
  { key: 'hvgml`', text: 'Hindu Veg Meal', value: 'Hindu Veg Meal' },
  { key: 'hnvgml', text: 'Hindu Non Veg Meal', value: 'Hindu Non Veg Meal' },
  { key: 'avgml', text: 'Asian Veg Meal', value: 'Asian Veg Meal' },
]

class MessageTabs extends Component {

  constructor()
  {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      activeItem: 'checkin',
      pdtDetails: [],
      pnr: [
        {
          key: 'ABCD1234',
          text: 'ABCD1234',
          value: 'ABCD1234',
        },
        {
          key: '1234XYZW',
          text: '1234XYZW',
          value: '1234XYZW',
        },
        {
          key: '1234PQRS',
          text: '1234PQRS',
          value: '1234PQRS',
        },
      ]
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

  render() {
    const { activeItem } = this.state
    var x='';
    if(this.props.notifications.backgroundImage=='../../images/echeckin1.jpg'){
      x='48';
    }
    else if(this.props.notifications.backgroundImage=='../../images/clock.jpg'){
      x='5';
    }
    else if(this.props.notifications.backgroundImage=='../../images/travelling.jpg'){
      x='4';
    }
    else if(this.props.notifications.backgroundImage=='../../images/shopping.jpg'){
      x='3';
    }
    else if(this.props.notifications.backgroundImage=='../../images/airport.jpg'){
      x='2';
    }
    else if(this.props.notifications.backgroundImage=='../../images/inflight.jpg'){
      x='inFlight';
    }
    else if(this.props.notifications.backgroundImage=='../../images/airport1.jpg'){
      x='destAirport';
    }
    else if(this.props.notifications.backgroundImage=='../../images/atcar.jpg'){
      x='inCar';
    }
    else if(this.props.notifications.backgroundImage=='../../images/iStock-165839065.jpg'){
      x='atHotel';
    }
    return (
      <div >
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical  style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className='imgHeight vhsidebar' style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.props.notifications.icon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
          <br/>
            <center>  <span className="subheaders">Web - Checkin</span> </center>
            <br/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <center>
                    <span className='subheaders'>DFW</span><br/>
                    <span className='subheaders' style={{
                        margin: "5px",fontSize:"10px"
                      }}>Dallas Fort Worth International Airport</span>
                  </center>
                </Grid.Column>
                <Grid.Column width={4}>
                  <center>
                  <span className='subheaders' style={{margin:"1px",fontSize:"10px"}}>XX103</span><br/>
                    <Icon name='long right arrow' inverted size="large"/><br/>
                    <sapn className='subheaders'  style={{fontSize:"10px"}}>Non stop</sapn>
                  </center>
                </Grid.Column>
                <Grid.Column width={6}>
                  <center>
                    <span className='subheaders'>PHX</span><br/>
                    <span className='subheaders' style={{margin: "5px",fontSize:"10px"}}>Phoenix International Airport</span>
                  </center>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={4}>
                <br/>
                <br/>
                  <span className="subheaders">Departure</span>
                </Grid.Column>
                <Grid.Column width={10}>
                <br/>
                <br/>
                <span className="subheaders" >12:55 PM, Mon Dec 11, 2017</span>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={4}>
                <span className="subheaders">Arrival</span>
                </Grid.Column>
                <Grid.Column width={10}>
                <span className="subheaders"> 3:15 PM, Mon Dec 11, 2017</span>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Dropdown fluid placeholder='Meal preferences' search selection defaultValue='Asian Veg Meal' options={mealOptions} className='drop1'/>
                  <br/>
                  <Dropdown fluid placeholder='Seat preferences' search selection defaultValue='Window' options={seatOptions} className='drop1'/>
                  <br/>
                  <Modal basic
                    trigger={<center><Button inverted><Icon name='plane' />Confirm Checkin</Button></center>}>
                    <Header icon='plane' content='Good Luck..!!' />
                    <Modal.Content>
                      <span className="subheaders">You have E-checked in Successfully. The Boarding Pass has been saved to your Mobile Wallet. </span>
                       <span className="subheaders">Do you want to E-Check in your Luggage?</span>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button as={Link} to={'/luggage'} inverted>
                        <Icon name='checkmark' /> Yes
                      </Button>
                      <Button as={Link} to={`/homepage1/${x}`} inverted>
                        <Icon name='cancel' /> No
                      </Button>
                    </Modal.Actions>
                   </Modal>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(MessageTabs);
