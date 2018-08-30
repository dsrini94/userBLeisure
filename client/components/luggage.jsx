import React, { Component } from 'react'
import { friendOptions } from './commons.js'
import {Link} from 'react-router-dom'
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar} from 'semantic-ui-react'
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';

class Luggage extends Component {

  constructor()
  {
    super();
    this.state = {
      price:0,
      size:0,
      quantity:0,
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

      weight: [
        {
          key: '5KG',
          text: '5 Kgs',
          value: '5',
        },
        {
          key: '10KG',
          text: '10 Kgs',
          value: '10',
        },
        {
          key: '15KG',
          text: '15 Kgs',
          value: '15',
        },
      ]
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSizeClick = this.handleSizeClick.bind(this);
    this.handleQuantityClick = this.handleQuantityClick.bind(this);
  }
  handleSizeClick(e, { value }){

    this.setState({size:value});

  }
  handleQuantityClick(e, { value }){

    this.setState({quantity:value});

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
    const { value } = this.state
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
    return (
      <div >
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className='imgHeight vhsidebar' style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.props.notifications.icon}/>
            <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
              <br/>
                <center><span className="subheaders" style={{fontSize:"25px"}}>Luggage Checkin</span></center>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
              <Image src='../images/lug1.png' size='medium' rounded centered/>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={14}>
               <Dropdown placeholder='Number Of Bags' fluid search selection options={this.state.bigLugagge} className='drop1'/>
               <Grid.Column width={1}/>
            </Grid.Column>
            </Grid.Row>
                {/* <Divider inverted /> */}
            <Grid.Row>
              <Grid.Column width={11}>
                <center><span className="subheaders" >Extra Luggage</span></center>
              </Grid.Column>
                <Grid.Column width={5}>
                  <Label.Group tag>
                      <Label as='a' color='green' size='medium'>$ {(this.state.quantity)*(this.state.size)}</Label>
                  </Label.Group>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={1}/>
              <Grid.Column width={5}>
                <Dropdown fluid onChange={this.handleSizeClick} options={this.state.weight}  placeholder='Size' selection value={value} className='drop1'/>
              </Grid.Column>
              <Grid.Column width={5}>
                <Dropdown onChange={this.handleQuantityClick} placeholder='Quantity' fluid selection options={this.state.bigLugagge} className='drop1' value={value}>
                </Dropdown>
              </Grid.Column>
              <Grid.Column width={4}>
                  <Button positive>BUY</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={5}/>
            <center><Button fluid inverted onClick={()=>{this.setState({cameraModal:true})}}><Icon name='photo' /> Upload Pictures</Button></center>
             </Grid.Row>
            </Grid>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Modal open={this.state.cameraModal}  size='small'>
        <Modal.Content>
          <Image src='./../../images/bag_photo.jpg' size='medium' centered />
          <center><Button color='green' style={{marginTop:'3%'}}
            onClick={()=>{this.setState({photoModal:true,cameraModal:false})}}>
             <Icon name='camera' /> Take Picture</Button></center>
        </Modal.Content>
        {/* <Modal.Actions>
          <center>
          <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={()=>{this.setState({cameraModal:false})}}>
            <Icon name='checkmark'/>
            Close window
          </Button>
          </center>
        </Modal.Actions> */}
      </Modal>
      <Modal open={this.state.photoModal}  size='small'>
        <Modal.Content>
          <Image src='./../../images/BagUpload.png' size='medium' centered />
          <p style={{textAlign:'center',fontSize:'20px',marginTop:'3%'}}>Dimensions are approved</p>
        </Modal.Content>
        <Modal.Actions>
          <center>
          <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={()=>{this.setState({photoModal:false})}}>
            <Icon name='checkmark'/>
            Close window
          </Button>
          </center>
        </Modal.Actions>
      </Modal>
      </div>


    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(Luggage);
