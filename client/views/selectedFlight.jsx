import React from 'react';
import HeaderComponent from './../components/header.jsx';
import SelectedFlightComponent from './../components/selectedFlightComponent.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
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
  Divider,
  Advertisement,
  Modal
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SelectedFlight extends React.Component
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
    console.log("props",this.props);
    return(
      <div >
            <SelectedFlightComponent way={this.props.match.params.way} time={this.props.match.params.time} from={this.props.match.params.from} to={this.props.match.params.to}/>

      </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}


export default connect(mapStateToProps, null)(SelectedFlight);
