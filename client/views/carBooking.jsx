import React from 'react'
import {Modal,Radio,Form,Grid, Input, Icon, Divider, Button, Card,Segment,Header,Dropdown,Image,Sidebar,Menu} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const styles = {
  slideContainer: {
    // padding: '0 10px',
    width:'75%'
  }
};
const paymentOptions = [
  { key: 'Office', text: 'Use Office card ending with 4576', value: 'Use Office card ending with 4576' },
  { key: 'personal', text: 'Use Personal card ending with 5647', value: 'Use Personal card ending with 5647' },
]

const monthOptions = [{ key: '01`', text: '01', value: '01' },{ key: '02`', text: '02', value: '02' },
{ key: '03`', text: '03', value: '03' },{ key: '04`', text: '04', value: '04' },
{ key: '05`', text: '05', value: '05' },{ key: '06`', text: '06', value: '06' },
{ key: '07`', text: '07', value: '07' },{ key: '08`', text: '08', value: '08' },
{ key: '09`', text: '09', value: '09' },{ key: '10`', text: '10', value: '10' },
{ key: '11`', text: '11', value: '11' },{ key: '12`', text: '12', value: '12' }];
const yearOptions = [{ key: '17`', text: '17', value: '17' },{ key: '18`', text: '18', value: '18' },
{ key: '19`', text: '19', value: '19' },{ key: '20`', text: '20', value: '20' },
{ key: '21`', text: '21', value: '21' },{ key: '22`', text: '22', value: '22' },
{ key: '23`', text: '23', value: '23' },{ key: '24`', text: '24', value: '24' },
{ key: '25`', text: '25', value: '25' },{ key: '26`', text: '26', value: '26' },
{ key: '27`', text: '27', value: '27' },{ key: '28`', text: '28', value: '28' }];
class carBooking extends React.Component {
  constructor() {
    super();
    this.state={
      sidebarVisiblity: false,
      toggleIcon: 'content',
      status:false,
      carName:'',
      alternatePaymentModal:false
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
  handleCardClick(p){
    this.setState({status:true,carName:p});
  }
  render(){
    var p="";
    if(this.state.status == true){
      p=(<Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">You selected</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">{this.state.carName}</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <span className="subheaders" style={{fontWeight:"bold"}}>Pick up</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">Start Date</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">12th Dec 2017 18:00</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">Location</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">London - Airport - Heathrow- Terminal 5</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <span className="subheaders" style={{fontWeight:"bold"}}>Return</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">End Date</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">14th Dec 2017 18:00</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">Location</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">London - Airport - Heathrow- Terminal 5</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">Vehicle class</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">Sedan</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <span className="subheaders">Fare</span>
          </Grid.Column>
          <Grid.Column width={8}>
            <span className="subheaders">$200</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
          <Dropdown fluid placeholder='Select Payment Cards' defaultValue='Use Office card ending with 4576' selection options={paymentOptions} className='drop1' style={{marginTop:"5px"}}/>
          {/* <Input icon='credit card alternative' iconPosition='left' placeholder='CVV' style={{opacity:"0.6",marginTop:"10px"}}/> */}
          <Form>
          <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
            <Radio style={{display:"inline"}} onChange={()=>{this.setState({alternatePaymentModal:true})}}/>
            <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Make Alternate Payment</label>
          </Form.Field>
          </Form>
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
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link to={`/CabSummaryDetails/${this.state.carName}`}>
            <Button fluid inverted><Icon name="taxi" />Book a Car</Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>)
    }
    else{
      p=(<div></div>)
    }
    return(
      <div >
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
          </Sidebar>
          <Sidebar.Pusher>
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
              <br/>
              <center>
                <span className="subheaders" style={{fontSize:"25px"}}>Rent a Car</span>
                <br/><br/>
              </center>
              <Grid>
              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={14}>
                <Form>
                <Form.Field>
                  <label className="subheaders" style={{color:"white"}}>Pickup Location</label>
                  <input placeholder='Pickup Location' style={{opacity:"0.6"}}/>
                  </Form.Field>
                  <Form.Field>
                    <label className="subheaders" style={{color:"white"}}>Pickup Time</label>
                    <input placeholder='Pickup Time' type="date" style={{opacity:"0.6"}}/>
                    </Form.Field>
                    <Form.Field>
                      <label className="subheaders" style={{color:"white"}}>Drop Location</label>
                      <input placeholder='Drop Location' style={{opacity:"0.6"}}/>
                      </Form.Field>
                      <Form.Field>
                        <label className="subheaders" style={{color:"white"}}>Drop Time</label>
                        <input placeholder='Drop Time' type="date" style={{opacity:"0.6"}}/>
                        </Form.Field>
                  </Form><br/>
                  <span className="subheaders">Pick a Car</span><br/><br/>
                  <SwipeableViews slideStyle={styles.slideContainer}>
                      <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.handleCardClick.bind(this,"Hertz Cab Rental")}>
                        <Image src='https://pbs.twimg.com/media/C4E_9uYXUAQ43Sd.jpg' />
                        <Card.Content>
                          <Card.Header>
                            Hertz Cab Rental
                          </Card.Header>
                        </Card.Content>
                      </Card>
                      <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.handleCardClick.bind(this,"National Cab Rental")}>
                        <Image src='https://writingmachine.com/wp-content/uploads/2016/05/logo-national-featured-540x272.jpg' />
                        <Card.Content>
                          <Card.Header>
                            National Cab Rental
                          </Card.Header>
                        </Card.Content>
                      </Card>

                      <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.handleCardClick.bind(this,"Budget Cab Rental")}>
                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3xEtADdYwzip_r039H67anjrRgLXNQJQlj5HlMOHISz18ySc' />
                        <Card.Content>
                          <Card.Header>
                            Budget Cab Rental
                          </Card.Header>
                        </Card.Content>
                      </Card>

                      <Card style={{width:'85%',boxShadow:'none',border:'none'}} onClick={this.handleCardClick.bind(this,"Thrifty Cab Rental")}>
                        <Image src='https://media.staticontent.com/media/pictures/a8199306-9c4a-4432-8983-c7415f0eb7da' />
                        <Card.Content>
                          <Card.Header>
                            Thrifty Cab Rental
                          </Card.Header>
                        </Card.Content>
                      </Card>
                  </SwipeableViews>
                  <br/>
                  {p}
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(carBooking);
