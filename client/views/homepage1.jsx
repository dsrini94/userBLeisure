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
  Form,Sidebar, Segment, Menu
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';

 class Test extends React.Component {
   constructor(props)
   {
     super(props);
   }

   componentDidMount()
   {

   }
  render() {
    console.log(this.props.notifications.case1,"caseno",this.props.match.params.hrs);
    var c='';
    if(this.props.match.params.hrs=='48'){
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire will see Notifications that are relevant to 48 hours prior to Flight departure.</span>);
    }
    else if(this.props.match.params.hrs=='5') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire will see Notifications that are relevant to 5 hours prior to Flight departure.</span>);
    }
    else if(this.props.match.params.hrs=='4') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire is travelling in the car to the Airport. She'll see Notifications relevant to that hour.</span>);
    }
    else if(this.props.match.params.hrs=='3') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire is at the Airport around 3 hours prior to the Flight Departure. She'll will see Notifications relevant to that hour.</span>);
    }
    else if(this.props.match.params.hrs=='2') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>It's time to board the Flight. Claire will see Notifications relevant to that hour.</span>);
    }
    else if(this.props.match.params.hrs=='inFlight') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire is seated inside the Flight. She'll see Notifications for in-flight.</span>);
    }
    else if(this.props.match.params.hrs=='destAirport') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>The Flight has reached the destination. Claire will see Notifications relevant to that hour.</span>);
    }
    else if(this.props.match.params.hrs=='inCar') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire has picked up her Rental Car and is on the way to the Hotel. She'll see Notifications relevant to that hour.</span>);
    }
    else if(this.props.match.params.hrs=='atHotel') {
      c=(<span className="subheaders" style={{fontSize:"25px"}}>Claire is at the Hotel. She'll see Notifications relevant to that hour.</span>);
    }
    var b1='';
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar transparent={true} as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.props.notifications.icon} />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Grid>
                <Grid.Row>
                  <Grid.Column style={{textAlign:'center'}}>{c}</Grid.Column>
                  </Grid.Row>
                </Grid>

            </div>

        </Sidebar.Pusher>
      </Sidebar.Pushable>

);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Test);
