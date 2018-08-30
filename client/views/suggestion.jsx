import React from 'react';
import SuggestedCards from './../components/suggestedCards.jsx';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import SuggestedCardsScroller from './../components/suggestedCardsScroller.jsx'
import HeaderComponent from './../components/header.jsx';

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Divider,
  Grid
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Suggestion extends React.Component {
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

  render() {
    return (<div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <div>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
            </div>
            <div>
              <HeaderComponent heading={'Suggested itinerary'}/>
              <SuggestedCardsScroller/>
              <br/>
              <Divider horizontal>Or</Divider>
              <center>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Link to='/search'><Button fluid inverted style={{backgroundColor:'#800000'}}>
                      Fly New
                    </Button>
                    </Link>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </center>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Suggestion);
