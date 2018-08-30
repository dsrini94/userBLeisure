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
  Modal,
  Statistic
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
      products:""
    }
  }


  render() {
    return (<Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical="vertical" icon='labeled'>
        <SidebarMenu/>
      </Sidebar>
      <Sidebar.Pusher >
        <div style={{
            background: "url('./../../images/blur.jpg')",
            overflow: "hidden",
            backgroundAttachment: "fixed"
          }}>
          <Appbar toggleIcon={this.props.notifications.icon}/>
          <center>
            <span className="subheaders" style={{
                marginTop: "10px"
              }}>Duty Free Shopping</span>
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
