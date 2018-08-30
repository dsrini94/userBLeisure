import React from 'react';

import {
  Icon,
  Menu,
  Dropdown,
  Label
} from 'semantic-ui-react';

import {connect} from 'react-redux';
import Action2hrs from './../../redux/actions/2Hrs.js';
import Action3hrs from './../../redux/actions/3Hrs.js';
import Action5hrs from './../../redux/actions/5Hrs.js';
import Action4hrs from './../../redux/actions/4Hrs.js';
import Action48hrs from './../../redux/actions/48Hrs.js';
import ActionatAirport from './../../redux/actions/atAirport.js';
import ActiondesAirport from './../../redux/actions/desAirport.js';
import ActionpostFlight from './../../redux/actions/postFlight.js';
import ActionatCab from './../../redux/actions/atCab.js';
import ToggleFunction from './../../redux/actions/toggleFunction.js';
import InFlight from './../../redux/actions/inFlight.js'

import {bindActionCreators} from 'redux';


import {HashRouter, Route, Link} from 'react-router-dom';

const temp = (
  <Menu.Item as='a' >
    <Icon name='time' inverted/>
      <span className="subheaders">Time Travel</span>
  </Menu.Item>
)


class SidebarMenu extends React.Component {

  render() {
    return (<div >

      <Menu.Item name='home' >
        <span className="companyName">BLeisure</span>
      </Menu.Item>
      <Dropdown  trigger={temp} pointing='top right' text='time travel' icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item  text='48 hrs' as={Link} to={`/homepage1/48`} onClick={()=>this.props.handle48hrs()} />
          <Dropdown.Item  text='5 hrs'  as={Link} to={`/homepage1/5`} onClick={()=>this.props.handle5hrs()}/>
          <Dropdown.Item  text='4 hrs'  as={Link} to={`/homepage1/4`} onClick={()=>this.props.handle4hrs()}/>
          <Dropdown.Item  text='3 hrs'  as={Link} to={`/homepage1/3`} onClick={()=>this.props.handle3hrs()}/>
          <Dropdown.Item  text='2 hrs'  as={Link} to={`/homepage1/2`} onClick={()=>this.props.handle2hrs()}/>
          <Dropdown.Item  text='In Flight'  as={Link} to={`/homepage1/inFlight`} onClick={()=>this.props.handleInflight()}/>
          <Dropdown.Item  text='Dest Airport'  as={Link} to={`/homepage1/destAirport`} onClick={()=>this.props.handleDesAirport()}/>
          <Dropdown.Item  text='In the Car'  as={Link} to={`/homepage1/inCar`} onClick={()=>this.props.handleCab()}/>
          <Dropdown.Item  text='At the Hotel'  as={Link} to={`/homepage1/atHotel`} onClick={()=>this.props.handlePostFlight()}/>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item name='home' as={Link} to='/search' onClick={()=>this.props.handleToggle()}>
        <Icon name='plane' inverted/>
        <span className="subheaders">Flights</span>
      </Menu.Item>
      <Menu.Item as={Link} to='/hotelBooking' name='gamepad' color='red' onClick={()=>this.props.handleToggle()}>
        <Icon name='hotel' inverted/>
        <span className="subheaders">Hotel</span>
      </Menu.Item>
      <Menu.Item  as={Link} to='/carBooking'  name='camera' color='red' onClick={()=>this.props.handleToggle()}>
        <Icon name='taxi' inverted/>
        <span className="subheaders">Car Rentals</span>
      </Menu.Item>
      <Menu.Item  as={Link} to='/wallet'  name='camera' color='red' onClick={()=>this.props.handleToggle()}>
        <Icon name='currency' inverted/>
        <span className="subheaders">Wallet</span>
      </Menu.Item>
      <Menu.Item name='camera' as={Link} to='/chat' color='red' onClick={()=>this.props.handleToggle()}>
        <Icon name='chat' inverted/>
        <span className="subheaders">Chat</span>
      </Menu.Item>
    </div>);
  }
}



function matchDispatchToProps(dispatch)
{
  return bindActionCreators({
      handle2hrs:Action2hrs,
      handle3hrs:Action3hrs,
      handle4hrs:Action4hrs,
      handle5hrs:Action5hrs,
      handle48hrs:Action48hrs,
      handleAtAirport:ActionatAirport,
      handleDesAirport:ActiondesAirport,
      handlePostFlight:ActionpostFlight,
      handleCab:ActionatCab,
      handleToggle: ToggleFunction,
      handleInflight:InFlight
  },dispatch)
}

export default connect(null,matchDispatchToProps)(SidebarMenu)
