import React from 'react'
import {Modal,Grid, Input, Icon, Divider, Button, Card,Segment,Header,Sidebar,Menu} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Getlatlong from '../components/getlatlong.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class MainSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      modal:false
  }
}

componentDidMount()
{
  this.setState({modal:true})
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
          <img src={'./../../images/map.jpg'} style={{
            margin: 'auto',
          }} />
          <center>
          <br/>
          <Button inverted><Icon name="map" />Navigate</Button>
          <br/>
          </center>
          <Modal open={this.state.modal} basic="basic" size='small'>
            <Header icon='taxi' content='Your Car is ready'/>
            <Modal.Content>
              <span className="subheaders">Your car is ready to be picked up at Hertz Rental aisle 5</span>
            </Modal.Content>
            <Modal.Actions>
            <Button as={Link} to={`/homepage1/${x}`} color='red' inverted="inverted" onClick={()=>{this.setState({modal:false})}}>
              <Icon name='close'/>
              Close
            </Button>
              <Button color='green' inverted="inverted" onClick={()=>{this.setState({modal:false})}}>
                <Icon name='map'/>
                Navigate
              </Button>
            </Modal.Actions>
          </Modal>
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

export default connect(mapStateToProps, null)(MainSummary);
