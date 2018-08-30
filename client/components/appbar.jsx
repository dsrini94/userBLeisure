import React from 'react';
import {
  Menu,
  Icon,
  Dropdown,
  Label,
  Divider,
  Segment,
  Image,
  Modal,
  Header,
  Button,
  Dimmer,
  Grid,
  Table,
  Card
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CountDecreament from './../../redux/actions/decreamentCount.js';
import ToggleFunction from './../../redux/actions/toggleFunction.js';
import giftVoucher from './../../redux/actions/giftVoucher.js';
import travelType from './../../redux/actions/travelType.js';


const avatar = (
  <Image src='./../../images/Claire2.jpg' style={{
      float: 'left',
      width: '40px',
      marginRight: '7px'
    }} circular/>
)

const options = [
  {
    key: 'user',
    text: 'You can now web-checkin',
    icon: 'user'
  }, {
    key: 'settings',
    text: 'Settings',
    icon: 'settings'
  }, {
    key: 'sign-out',
    text: 'Sign Out',
    icon: 'sign out'
  }
]
import {bindActionCreators} from 'redux';

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIcon: 'content',
      isDrawerOpen: false,
      count: 0,
      component: '',
      modalOpen: false,
      modalText: '',
      modalHeader: '',
      subModal:false,
      photoModal:false,
      flag:false,
      flag1:false,
      iconnew:'',
      travel:[{ key: 'business',value:'Business',text:'Business',icon:"suitcase" },
              { key: 'leisure',value:'Leisure',text:'Leisure',icon:"cocktail"}]
    }
    this.handleModal = this.handleModal.bind(this);
    this.handletravelType = this.handletravelType.bind(this);
  }

  handleParentToggle() {
    this.props.handleSiderbarVisiblity();
  }

  handleGiftModal()
  {
    this.setState({modalOpen:!this.state.modalOpen,subModal:!this.state.subModal});
    this.props.handlegiftVoucher();
  }

  handletravelType(e,{value})
  {
    this.props.handletravelType(value);
  }

  handleModal(i, key) {
    if (key == "time reminder") {
      this.setState({iconnew:'bell',modalHeader: 'Reminder !', modalText: 'You are 5 Hrs away from your flight time. With the current traffic conditions it will take you an hour to reach the airport. Please wrap up and leave'});
    } else if (key == "information") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'You can now drop your bags at the counter no 9'});
    } else if (key == "Appologies") {
      var temp = (<div>
        <center>
          <Card style={{backgroundColor:"rbga(0,0,0,0.6)"}}>
            <Image size="small" src='http://www.paintandpartyindy.com/uploads/1/9/3/1/19319209/s750543011658083779_p416_i2_w400.jpeg'/>
            <Card.Content>
              <Card.Header>
                <center>Lounge Access Gift Voucher</center>
              </Card.Header>
              <Card.Description>
                <span className="subheaders" style={{color:"black"}}>Flight is delayed by 4 Hrs so the airlines offers you a free lounge access voucher.</span>
                <br/>
                <br/>
                <Image size='small' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Barcode2of5example.svg/800px-Barcode2of5example.svg.png"/>
              </Card.Description>
            </Card.Content>
            <Card.Content extra="extra">
              <center>
                <Button basic="basic" color='green' onClick={this.handleGiftModal.bind(this)}>Add to wallet</Button>
              </center>
            </Card.Content>
          </Card>
        </center>

      </div>);
      this.setState({iconnew:'info',modalHeader: 'Sorry!', modalText: temp});
    }

    else if (key == "offer") {
      this.setState({iconnew:'info',modalHeader: 'Offer !', modalText: 'The airlines offers you a 3 Hrs lounge access today to compensate the flight delay'});
    }
    else if (key == "luggage drop") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'Please drop your bags at the couter 9'});
    }
    else if (key == "loaded") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'We are happy to inform you that your luggage is safely loaded into the cargo'});
    }
    else if (key == "luggage collect") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'You can now collect your luggage at carousel 3'});
    }
    else if (key == "delayal") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'We have informed the hotel and rental cars about the flight delay. You can pick the car once you reach your destination'});
    }
    else if (key == "cab") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'Your cab has arrived at your door step, Please leave.'});
    }
    else if (key == "digiKey added") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'Hotel has allocated Room no 117 your digital key is stored in your wallet. Head to your room once you reach the hotel'});
    }
    else if (key == "Boarding") {
      this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'The Boarding has started. Please proceed to Gate 13'});
    }
    // else if (key == "Get bags dropped to your Car") {
    //   this.setState({iconnew:'info',modalHeader: 'Information !', modalText: 'Get bags dropped to your Car'});
    // }
    this.setState({
      modalOpen: !this.state.modalOpen
    });
    if (key == "photoClick") {
      console.log("modal");
      this.setState({cameraModal: true,modalOpen: !this.state.modalOpen});
    }
    else if(key=="Your in-flight requests are ready"){
      this.setState({flag:true,modalOpen: this.state.modalOpen});
    }
    else if (key == "Get bags dropped to your Car") {
      this.setState({flag1:true,modalOpen: this.state.modalOpen});
    }
    this.props.handleCount(i)
  }

  render() {
    // console.log("background image ",this.props.notifications.backgroundImage);
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
    const { value } = this.state
    // console.log("notification",this.props.notifications);
    if (this.props.notifications.count == 0) {
      var temp = (<Menu.Item as='a'>
        <Icon name='bell'/>
      </Menu.Item>);
    } else {
      var temp = (<Menu.Item as='a'>
        <Icon name='bell'/>
        <Label color='yellow' floating>{this.props.notifications.count}</Label>
      </Menu.Item>);
    }

    return (<div>
      <Menu secondary className='appbar' inverted >
        <Menu.Item name='browse' style={{
            marginRight: '-20px'
          }}>
          <Icon name={this.props.notifications.icon} inverted onClick={()=>this.props.handleToggle()}/>
        </Menu.Item>
        <Menu.Item name='browse' style={{
            marginRight: '-20px'
          }}>
          <Dropdown trigger={avatar} options={this.state.travel} pointing='top left' icon={null} onChange={this.handletravelType} value={value}/>

        </Menu.Item>
        <Menu.Item name='submit'>
          <Link to='/homepage'>
            <span className="subheaders">Hi Claire</span><br/>
            <span className="subheaders" style={{
                fontSize: '10px'
              }}>Silver (Silver++)</span>
          </Link>
        </Menu.Item>
        <Menu.Menu position='right' style={{
            marginRight: '10px',
            marginTop: '15px'
          }}>
          <Dropdown trigger={temp} pointing='top right' icon={null}>
            <Dropdown.Menu>
              {
                this.props.notifications.data.map((item, i) => {
                  if (item.link == "") {
                    return (<Dropdown.Item text={item.textData} icon={item.icon} key={i} onClick={() => this.handleModal(i, item.key)} disabled={item.disabled}/>);
                  } else {
                    return (<Dropdown.Item as={Link} to={item.link} text={item.textData} icon={item.icon} key={i} onClick={() => this.props.handleCount(i)} disabled={item.disabled}/>);
                  }
                })
              }
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      <Modal basic open={this.state.modalOpen}>
         <Header icon={this.state.iconnew} content={this.state.modalHeader} />
        <Modal.Content>
          <span className="subheaders">
            {this.state.modalText}
          </span>
        </Modal.Content>
        <Modal.Actions>
          <Button as={Link} to={`/homepage1/${x}`} inverted floated = "right" style = {{margin:"30px"}}
          onClick = {
             () => {
               this.setState({
                 modalOpen: !this.state.modalOpen
               })
             }
           }><Icon name='cancel' />Close</Button>
        </Modal.Actions>
       </Modal>

        <Modal basic open={this.state.subModal}>
          <Header  icon='currency' content='Digi Wallet'/>
          <Modal.Content>
            <p>Gift Voucher added to your wallet</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={()=>{this.setState({subModal:!this.state.subModal})}}>
              <Icon name='checkmark'/>
              Done
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal basic open={this.state.flag1}>
          <Header  icon='info' content='Information'/>
          <Modal.Content>
            <p>Do you want your bags to be dropped at thr Rental Car?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={()=>{this.setState({flag1:false})}}>
              <Icon name='cancel'/>
              No
            </Button>
            <Button color='green' onClick={()=>{this.setState({flag1:false,flag2:true})}}>
              <Icon name='checkmark'/>
              Yes
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal basic open={this.state.flag2}>
          <Modal.Content>
            <span className="subheaders">
              Your bags will been dropped at your Rental Car point.
            </span>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' style = {{margin:"30px"}}
            onClick = {
               () => {
                 this.setState({
                   flag2: false
                 })
               }
             }><Icon name='cancel' />Close</Button>
          </Modal.Actions>
         </Modal>
         <Modal open={this.state.cameraModal}  size='small'>
           <Modal.Content>
             <Image src='./../../images/bag_photo.jpg' size='medium' centered />
             <center><Button color='green' style={{marginTop:'3%'}}
               onClick={()=>{this.setState({photoModal:true,cameraModal:false})}}>
                <Icon name='camera' /> Take Picture</Button></center>
           </Modal.Content>
           {/* <Modal.Actions>
             <center>
             <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={()=>{this.setState({cameraModal:false,modalOpen:false})}}>
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
            <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={()=>{this.setState({photoModal:false,modalOpen:false})}}>
              <Icon name='checkmark'/>
              Close window
            </Button>
            </center>
          </Modal.Actions>
        </Modal>
        <Dimmer active={this.state.flag}>
        <Grid style={{backgroundColor:'rgba(0, 0, 0, 0.5)',border:'none'}}>
                    <Grid.Row >
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column width={12} >
                      <Card style={{textAlign:'center'}}>
                      {/* <Label  floating><Icon  color = 'red' name = "info" size='large'/></Label> */}
                        <Card.Content style ={{textColor :"#800000"}}>
                          <Segment  style={{borderRadius:'0px',padding:'7px',backgroundColor:'#800000'}}>
                            <span> In-Flight Requests </span>
                          </Segment>

                          {/* <Grid>
                            <Grid.Row>
                            </Grid.Row>
                          </Grid> */}
                          <Table unstackable >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Request</Table.HeaderCell>
              <Table.HeaderCell>Timing</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Lemon Tea</Table.Cell>
                <Table.Cell>20 minutes after takeoff</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Do Not Disturb</Table.Cell>
                <Table.Cell>Till Lunch time</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Asian Veg Meal for Lunch</Table.Cell>
              <Table.Cell>75 minutes after tea</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Video Conferencing</Table.Cell>
              <Table.Cell>60 minutes after lunch</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Lemon Tea</Table.Cell>
              <Table.Cell>60 minutes after lunch</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Video Conferencing</Table.Cell>
              <Table.Cell>120 minutes after lunch</Table.Cell>

              </Table.Row>
              <Table.Row>
                <Table.Cell>Do not Disturb</Table.Cell>
              <Table.Cell>Till Landing</Table.Cell>

              </Table.Row>
            </Table.Body>
          </Table>
          <Button fluid color='blue' onClick={()=>{this.setState({flag:false})}}>OK</Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    </Grid.Row>
          </Grid>
        </Dimmer>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleToggle: ToggleFunction,
    handleCount: CountDecreament,
    handlegiftVoucher:giftVoucher,
    handletravelType:travelType
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Appbar);
