import React from 'react';
import Appbar from './../components/appbar.jsx';
import OnwardflightSearchResultCards from './../components/onwardflightSearchResultCards.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider
} from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FlightSearchResultPage extends React.Component {
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
  render() {
    // console.log(typeof parseInt(this.props.match.params.onwardDate1),parseInt(this.props.match.params.onwardDate1),new Date(parseInt(this.props.match.params.onwardDate1)).toDateString());
    return (<div >
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher >
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={1}/>
                <Grid.Column width={2}/>
                <Grid.Column width={10}><center><span className="subheaders" style={{fontSize:"20px"}}>Onward Flight</span></center></Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    <OnwardflightSearchResultCards from='LAX' to ='DEN' fromDetail='Los Angeles' toDetail='Denver' value='1' seatNo="15F" time1={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate1)).toDateString()} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX301'/>
                    <OnwardflightSearchResultCards from='LAX' to ='DEN' fromDetail='Los Angeles' toDetail='Denver' value='2' seatNo="1D" time1={"4:10 PM "+new Date(parseInt(this.props.match.params.onwardDate1)).toDateString()} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX302'/>
                    <OnwardflightSearchResultCards from='LAX' to ='DEN' fromDetail='Los Angeles' toDetail='Denver' value='3' seatNo="3I" time1={"7:15 PM "+new Date(parseInt(this.props.match.params.onwardDate1)).toDateString()} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX303'/>
                    <OnwardflightSearchResultCards from='LAX' to ='DEN' fromDetail='Los Angeles' toDetail='Denver' value='4' seatNo="6A" time1={"1:55 PM "+new Date(parseInt(this.props.match.params.onwardDate1)).toDateString()} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX304'/>
                    <OnwardflightSearchResultCards from='LAX' to ='DEN' fromDetail='Los Angeles' toDetail='Denver' value='5' seatNo="2C" time1={"3:05 PM "+new Date(parseInt(this.props.match.params.onwardDate1)).toDateString()} time2={"12:55 PM "+new Date(parseInt(this.props.match.params.onwardDate2)).toDateString()} time1v={this.props.match.params.onwardDate1} time2v={this.props.match.params.onwardDate2} flightNo='XX305'/>
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}


export default connect(mapStateToProps, null)(FlightSearchResultPage);
