import React, { Component } from 'react'
import { friendOptions } from './commons.js'
import {Link} from 'react-router-dom'
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar} from 'semantic-ui-react'
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class MessageTabs extends Component {
  constructor()
  {
    super();
    this.state = {
      modalOpen: false,
      sidebarVisiblity: false,
      toggleIcon: 'content',
      activeItem: 'checkin',
      pdtDetails: [],
      pnr: [
        {
          key: 'ABCD1234',
          text: 'ABCD1234',
          value: 'ABCD1234',
        },
        {
          key: '1234XYZW',
          text: '1234XYZW',
          value: '1234XYZW',
        },
        {
          key: '1234PQRS',
          text: '1234PQRS',
          value: '1234PQRS',
        },
      ],
      bigLugagge: [
      {
        key: '0',
        text: '0',
        value: '0',
      },
        {
          key: '1',
          text: '1',
          value: '1',
        },
        {
          key: '2',
          text: '2',
          value: '2',
        },
        {
          key: '3',
          text: '3',
          value: '3',
        },
      ],
      wieght: [
        {
          key: '5KG',
          text: '5KG',
          value: '5',
        },
        {
          key: '10KG',
          text: '10KG',
          value: '10',
        },
        {
          key: '15KG',
          text: '15KG',
          value: '15',
        },
      ]
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(){
    console.log('clicked');
    this.setState({modalOpen: true});
    console.log(this.state.modalOpen);
  }
  handleClose(){
    this.setState({modalOpen: false});
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
    const { activeItem } = this.state
    return (
      <div className='vhsidebar'>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical >
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
          <div>
            <Appbar toggleIcon={this.props.notifications.icon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
          </div>
          <br/>
          <div >
            <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Header size='medium' textAlign='center'>Luggage Checkin</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
              <Image src='../images/1.png' size='medium' rounded centered/>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
               <Dropdown placeholder='Number Of Bags' fluid search selection options={this.state.bigLugagge} />
            </Grid.Column>
            </Grid.Row>
                {/* <Divider inverted /> */}
            <Grid.Row>
              <Grid.Column>
                <Header size='medium' textAlign='center'>Extra Luggage</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={6}>
                <Dropdown placeholder='Size' fluid selection options={this.state.wieght} >
                </Dropdown>
              </Grid.Column>
              <Grid.Column width={6}>
                <Dropdown placeholder='Quantity' fluid selection options={this.state.bigLugagge} >
                </Dropdown>
              </Grid.Column>
              <Grid.Column width={4}>
                  <Button positive>BUY</Button>
              </Grid.Column>
            </Grid.Row>
             <Divider horizontal></Divider>
             <Modal
               trigger={<Button fluid style={{backgroundColor:'#800000',color:'white',margin:'4%'}}><Icon name='photo' /> Upload Pictures</Button>}
               header='Image has been Uploaded..!!'
               actions={[
                 { key: 'done', content: 'Done', positive: true },
               ]}
             >
             </Modal>
            </Grid>
          </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(MessageTabs);
