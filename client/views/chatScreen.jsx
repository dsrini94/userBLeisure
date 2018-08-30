import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import ChatComponent from './../components/chatComponent.jsx'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderComponent from './../components/header.jsx';
class Chat extends React.Component
{
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
  render()
  {
    return(
      <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar transparent={true} as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical  style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
        <div className='vhsidebar imgHeight' style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
          <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
        <center style={{marginTop:"10px",marginBottom:'10px'}}><span as='h4' className="subheaders">Chat</span></center>
        <ChatComponent style={{marginTop:"10px"}}/>
        </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Chat);
