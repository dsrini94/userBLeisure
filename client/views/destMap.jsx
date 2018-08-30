import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header,Sidebar,Menu} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Getlatlong from '../components/getlatlong.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DestMap extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content'
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
  // handleClose(){
  //   this.setState({
  //     isOpen: false
  //   })
  // };
  render(){
    return(
      <div className="vhsidebar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>

          <br/>
          <center>
          <span className="subheaders" style={{fontSize:"25px"}}>Map Overview</span>
          <br/>
          <br/>
          <span className="subheaders">At the Airport</span>
          <br/>
          <br/>
          </center>
          <Grid>
            <Grid.Row>
              <Grid.Column style={{textAlign:'center'}}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <img src={'./../../images/DestinationMap.PNG'} style={{
            margin: 'auto',
          }} />
          <center>
          <br/>
          <Button inverted><Icon name="map" />Navigate</Button>
          </center>
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

export default connect(mapStateToProps, null)(DestMap);
