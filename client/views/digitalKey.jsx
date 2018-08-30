import React from 'react';
import {
  Button,
  Card,
  Icon,
  Image,
  Header,
  Grid,
  Input,
  Dropdown,
  Checkbox,
  Form,
  Sidebar,
  Segment,
  Menu,
  Radio,
  Label,
  Modal
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import SwipeableViews from 'react-swipeable-views';
import CabSlider from './../components/cabSlider.jsx'
import HotelSlider from './../components/hotelSlider.jsx'

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon:"lock",
      display:"Touch Here to Unlock "
    }
  }
  changEvent(){
    if(this.state.icon=="lock"){
    this.setState({icon:"unlock",display:"Touch Here to Lock "})
    }
    else{
      this.setState({icon:"lock",display:"Touch Here to Unlock "})
    }
  }
  render() {
    return (<Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical="vertical" icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
      </Sidebar>
      <Sidebar.Pusher >
        <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
          <Appbar toggleIcon={this.props.notifications.icon}/>
          <br/>
          <br/>
          <center>
            <span className="subheaders" style={{
                marginTop: "10px"
              }}>Digital Key</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <span className="subheaders" style={{fontSize:"25px"}}>Hotel Continental</span>
            <br/>
            <br/>
            <span className="subheaders" style={{
                marginTop: "10px"
              }}>Your Room No 117</span>
            <br/>
            <br/>
            <br/>
            <br/>
            <Segment circular="circular" style={{width:205,height:205,opacity:0.3}} onClick={this.changEvent.bind(this)}>
              <span className="subheaders" style={{color:"black",fontWeight:"bold"}}> {this.state.display} </span>
              <br/>
              <br/>
              <Icon name={this.state.icon} size="huge"/>
            </Segment>
          </center>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Test);
