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

const seatOptions = [
  { key: 'window', text: 'Window', value: 'Window' },
  { key: 'mid', text: 'Middle', value: 'Middle' },
  { key: 'aisle', text: 'Aisle', value: 'Aisle' },
]

const paymentOptions = [
  { key: 'Office', text: 'Use Office card ending with 4576', value: 'Use Office card ending with 4576' },
  { key: 'personal', text: 'Use Personal card ending with 5647', value: 'Use Personal card ending with 5647' },
]
const mealOptions = [
  { key: 'hvgml`', text: 'Hindu Veg Meal', value: 'Hindu Veg Meal' },
  { key: 'hnvgml', text: 'Hindu Non Veg Meal', value: 'Hindu Non Veg Meal' },
  { key: 'avgml', text: 'Asian Veg Meal', value: 'Asian Veg Meal' },
]

 class Test extends React.Component {

   constructor(props)
   {
     super(props);
     this.state={hotelComponent:'',
     cabComponent:'',
     alternatePaymentModal:false,
     temp:'',
     cab:'',
     airfare:350,
     hotelfare:0,
     cabfare:0
    }
   }

   cardClick(p) {
     var temp = (<span className="subheaders">{p}</span>)
     this.setState({temp: temp,hotelfare:200});

   }

   handleCabSelect(p) {
     var temp = (<span className="subheaders">{p}</span>)
     this.setState({cab: temp,cabfare:100});
   }

   handleCabCheckBox() {
     if (this.state.cabComponent == '') {
       var temp = (<div>
         <br/>
         <Input fluid placeholder='Pickup' style={{opacity:"0.6"}}/>
         <br/>
         <Input fluid placeholder='Drop' style={{opacity:"0.6"}}/>
         <br/>
         <CabSlider handleCabSelect={this.handleCabSelect.bind(this)}/>
       </div>);
       this.setState({cabComponent: temp});
     } else
       this.setState({cabComponent: ''});
     }

     handleHotelCheckBox() {
       if (this.state.hotelComponent == '') {
         var temp = (<div>
           <br/>
           <Input fluid placeholder='checkin' style={{opacity:"0.6"}}/>
           <br/>
           <Input fluid placeholder='checkout' style={{opacity:"0.6"}}/>
           <br/>
           <HotelSlider cardClick={this.cardClick.bind(this)}/>
         </div>)

         this.setState({hotelComponent: temp});

       } else
         this.setState({hotelComponent: ''});
       }

  render() {
    var iconvalue='';
    if(this.props.way=='OneWay'){
      iconvalue='long right arrow';
    }
    else if(this.props.way=='RoundTrip'){
      iconvalue='resize horizontal';
    }
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher >
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.props.notifications.icon} />
            <center style={{marginTop:"10px"}}><span as='h4' className="subheaders">Selected Flight</span></center>
            <br/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                <center>
                  <span className="subheaders">LAX</span><br/>
                  <span className="subheaders" style={{fontSize:"10px"}}>Los Angeles International Airport</span>
                </center>
                </Grid.Column>
                <Grid.Column width={4}>
                <center>
                  <Icon name={iconvalue} inverted size='large'/><br/>
                  <span className="subheaders" style={{fontSize:"10px"}}>XX103</span>
                  </center>
                </Grid.Column>
                <Grid.Column width={6}>
                <center>
                  <span className="subheaders">DEN</span><br/>
                  <span className="subheaders" style={{fontSize:"10px"}}>Denver International Airport</span>
                </center>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={14}>
                <Dropdown fluid placeholder='Seat Prefrences'  selection options={seatOptions} className='drop1' style={{marginTop:"10px"}}/>
                <Dropdown fluid placeholder='Meal Prefrences'  selection options={mealOptions} className='drop1' style={{marginTop:"10px"}}/>
                <Input fluid icon='calendar' iconPosition='left' placeholder='Journey Date' value={this.props.time} disabled style={{opacity:"0.6",marginTop:"10px"}}/>
                <br/>
                {this.state.temp}
                <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                  <Checkbox style={{display:"inline"}} onChange={this.handleHotelCheckBox.bind(this)}/>
                  <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Select Hotel</label>
                </Form.Field>
                {this.state.hotelComponent}
                <br/>
                {this.state.cab}
                <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                  <Checkbox style={{display:"inline"}} onChange={this.handleCabCheckBox.bind(this)}/>
                  <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Select Car</label>
                </Form.Field>
                {this.state.cabComponent}
                <br/>
                <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                  <Checkbox style={{display:"inline"}} />
                  <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Travel Insurance</label>
                </Form.Field>
                <br/>
                <center>
                <span as='a' className="subheaders">Total ${this.state.airfare+this.state.hotelfare+this.state.cabfare}</span>
                </center>
                <Dropdown fluid placeholder='Select Payment Cards' defaultValue='Use Office card ending with 4576' selection options={paymentOptions} className='drop1' style={{marginTop:"10px"}}/>
                {/* <Input icon='credit card alternative' iconPosition='left' placeholder='CVV'  style={{opacity:"0.6",marginTop:"10px"}}/> */}
                <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                  <Radio style={{display:"inline"}} onChange={()=>{this.setState({alternatePaymentModal:true})}}/>
                  <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Make Alternate Payment</label>
                </Form.Field>
                <br/>
                <center><Button as={Link} to={`/summaryDetails/${this.props.way}/${'LAX'}/${'DEN'}`} inverted><Icon name="credit card alternative"/>Make Payment</Button></center>
                <Modal open={this.state.alternatePaymentModal} basic size='small'>
                  <Header icon='credit card alternative' content='Alternate Payment' />
                    <Modal.Content>
                    <Form.Field>
                      <Radio style={{display:"inline"}} name='radioGroup' value='this'
                        onChange={(e, { value }) => this.setState({ value })}
                        checked={this.state.value === 'this'}/>
                      <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Use another card</label>
                      <Radio style={{display:"block",marginTop:'10px'}} name='radioGroup' value='that'
                        onChange={(e, { value }) => this.setState({ value })}
                        checked={this.state.value === 'that'}/>
                      <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Use loyalty points</label>
                    </Form.Field>
                    </Modal.Content>
                  <Modal.Actions>
                    <Button basic color='red' inverted onClick={()=>{this.setState({alternatePaymentModal:false})}}>
                      <Icon name='remove' /> Close
                    </Button>
                      <Button color='green' inverted onClick={()=>{this.setState({alternatePaymentModal:false})}}>
                        <Icon name='credit card alternative' /> Pay
                      </Button>
                  </Modal.Actions>
                  </Modal>
                <br/>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
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
