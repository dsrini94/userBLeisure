import React from 'react';
import RoundTripFlightSearchResultCard from './../components/roundTripFlightSearchResultCard.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';
import RoundflightSearchResultCards from './../components/roundflightSearchResultCards.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header,Grid } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {HashRouter, Route, Link} from 'react-router-dom';
class RoundTripSearchResult extends React.Component
{
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
  render()
  {
    // console.log(this.props);
    return(
      <div>
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
                  <Grid.Column width={2}>   <Link to={`/onwardTripSearchResult/${this.props.match.params.time1}/${this.props.match.params.time2}`}><Icon name='reply' style={{color:'#A19FA4'}}/>
                    </Link></Grid.Column>
                  <Grid.Column width={10}><center><span className="subheaders" style={{fontSize:"20px"}}>Return Flight</span></center></Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={14}>
                  <RoundflightSearchResultCards from='DEN' to ='LAX' fromDetail='Denver' toDetail='Los Angeles' value='1' seatNo="13F" time1={"12:55 PM "+new Date(this.props.match.params.time1).getTime().toString()} time={"12:55 PM "+new Date(parseInt(this.props.match.params.time2)).toDateString()} flightNo='XX401'/>
                  <RoundflightSearchResultCards from='DEN' to ='LAX' fromDetail='Denver' toDetail='Los Angeles' value='2' seatNo="5D" time1={"4:10 PM "+new Date(this.props.match.params.time1).getTime().toString()} time={"4:10 PM "+new Date(parseInt(this.props.match.params.time2)).toDateString()} flightNo='XX402'/>
                  <RoundflightSearchResultCards from='DEN' to ='LAX' fromDetail='Denver' toDetail='Los Angeles' value='3' seatNo="2I" time1={"7:15 PM "+new Date(this.props.match.params.time1).getTime().toString()} time={"7:15 PM "+new Date(parseInt(this.props.match.params.time2)).toDateString()} flightNo='XX403'/>
                  <RoundflightSearchResultCards from='DEN' to ='LAX' fromDetail='Denver' toDetail='Los Angeles' value='4' seatNo="7A" time1={"1:55 PM "+new Date(this.props.match.params.time1).getTime().toString()} time={"1:55 PM "+new Date(parseInt(this.props.match.params.time2)).toDateString()} flightNo='XX404'/>
                  <RoundflightSearchResultCards from='DEN' to ='LAX' fromDetail='Denver' toDetail='Los Angeles' value='5' seatNo="1C" time1={"3:05 PM "+new Date(this.props.match.params.time1).getTime().toString()} time={"3:05 PM "+new Date(parseInt(this.props.match.params.time2)).toDateString()} flightNo='XX405'/>
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

export default connect(mapStateToProps, null)(RoundTripSearchResult);
