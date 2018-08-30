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
      hotelComponent: '',
      cabComponent: '',
      alternatePaymentModal: false
    }
  }

  render() {
    var iconvalue='';
    var datevalue='';
    var dateCheckout='';
    var dateReturn='';
    // if(this.props.match.params.way=='OneWay'){
    //   iconvalue='long right arrow';
    // }
    // else if(this.props.match.params.way=='RoundTrip'){
    //   iconvalue='resize horizontal';
    // }
    if (this.props.match.params.from == 'DFW') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString().substr(4,6);
    } else if (this.props.match.params.from == 'IAH' && this.props.match.params.to == 'SEA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString().substr(4,6);
    } else if (this.props.match.params.from == 'NYC') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString().substr(4,6);
    } else if (this.props.match.params.from == 'PHX') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 41)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 43)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 43)).toDateString().substr(4,6);
    } else if (this.props.match.params.from == 'ATL') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'ORD') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 48)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 50)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 50)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'SEA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'LAS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 81)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 83)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 83)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'MIA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 172)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 174)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 174)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'BOS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 263)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 265)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 265)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'MIA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 354)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 356)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 356)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'BUF') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 144)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 146)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 146)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'WYS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 207)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 209)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 209)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'DEN') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString().substr(4,6);
    }
    else if (this.props.match.params.from == 'SLC' && this.props.match.params.to == 'IAG') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 326)).toDateString().substr(4,6);
      dateCheckout = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 328)).toDateString().substr(4,6);
      dateReturn = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 328)).toDateString().substr(4,6);
    }
    let xx='';
    if(this.props.match.params.way=='RoundTrip'){
      xx=(<Grid.Row>
        <Grid.Column width={1}>
        </Grid.Column><Grid.Column width={9}>
       <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>{this.props.match.params.from} <Icon style={{color:'white'}} name='long left arrow' inverted/> {this.props.match.params.to}</span>
       <br/>
       <span className="subheaders" style={{color:"white",fontSize:"9px",fontWeight:"bold"}}>10:30 AM, {dateCheckout} - 01:00 PM, {dateCheckout}</span>
      </Grid.Column>
      <Grid.Column width={5}>
      <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>PNR XX8452</span>
    </Grid.Column></Grid.Row>);
    }
    return (<Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
      </Sidebar>
      <Sidebar.Pusher >
        <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
          <Appbar toggleIcon={this.props.notifications.icon}/>
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
          <span className="subheaders" style={{fontSize:"12px"}}>Trip ID 45901278</span>
          <Segment style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}}>
          <Grid>
             <Grid.Row>
               <Grid.Column width={1}>
                <Icon name="plane" size="big" style={{color:'black'}}/>
               </Grid.Column>
               <Grid.Column width={9}>
                <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>{this.props.match.params.from} <Icon style={{color:'white'}} name='long right arrow' inverted/> {this.props.match.params.to}</span>
                <br/>
                <span className="subheaders" style={{color:"white",fontSize:"9px",fontWeight:"bold"}}>10:30 AM, {datevalue} - 01:00 PM, {datevalue}</span>
               </Grid.Column>
               <Grid.Column width={5}>
               <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>PNR XX5615</span>
               </Grid.Column>
             </Grid.Row>
             {xx}
             <Grid.Row>
               <Grid.Column width={2}>
                <Icon name="building" size="big" style={{color:'black'}}/>
               </Grid.Column>
               <Grid.Column width={7}>
                <span className="subheaders" style={{color:"white",fontSize:"14px",fontWeight:"bold"}}>Hotel Continental</span>
                <br/>
                <span className="subheaders" style={{color:"white",fontSize:"9px",fontWeight:"bold"}}>12:00 PM, {datevalue} - 12:00 PM, {dateCheckout}</span>
               </Grid.Column>
               <Grid.Column width={7}>
               <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Booking ID 1322789</span>
               </Grid.Column>
             </Grid.Row>

             <Grid.Row>
               <Grid.Column width={2}>
                <Icon name="taxi" size="big" style={{color:'black'}}/>
               </Grid.Column>
               <Grid.Column width={7}>
                <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Hertz Cars</span>
                <br/>
                <span className="subheaders" style={{color:"white",fontSize:"9px",fontWeight:"bold"}}>01:30 PM, {datevalue} - 01:30 PM, {dateReturn}</span>
               </Grid.Column>
               <Grid.Column width={7}>
               <span className="subheaders" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Booking ID 1097856</span>
               </Grid.Column>
             </Grid.Row>
           </Grid>
          </Segment>
          </center>
          <br/>
          <center>
          <Button inverted as={Link} to={`/SelectedSuggestedFlightComponent/${'upcoming'}/${this.props.match.params.way}/${this.props.match.params.from}/${this.props.match.params.to}/${'0'}`}><Icon name="pencil" style={{marginRight:"20px"}}/>Modify</Button>
          <Button inverted as={Link} to='/homepage'><Icon name="home" />Homepage</Button>
          </center>
          <br/>
          <br/>
          <br/>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Test);
