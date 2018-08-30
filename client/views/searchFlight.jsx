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
  Form,Sidebar, Segment, Menu
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

const fromStateOptions=[{ key: ' lax', text: ' Los Angeles', value: 'Los Angeles' }] ,toStateOptions=[{ key: ' den', text: 'Denver', value: 'Denver' }];


 class Test extends React.Component {

   constructor(props)
   {
     super(props);
     this.state={
       menuActiveItem: 'One way',
       slideIndex: 0,
       cabComponent:"",
       hotelComponent: '',
       cabComponent: '',
       adult:1,
       child:0,
       infant:0,
       onWardDate:'',
       onWardDate1:0,
       onWardDate2:0,
       temp:'',
       cab:''
     }
     this.handleItemClick = this.handleItemClick.bind(this);
   }

   cardClick(p) {
     var temp = (<span className="subheaders">{p}</span>)
     this.setState({temp: temp});

   }

   handleCabSelect(p) {
     var temp = (<span className="subheaders">{p}</span>)
     this.setState({cab: temp});
   }

   handleItemClick(e, {name}) {
     if (name == 'One way')
       this.setState({menuActiveItem: name, slideIndex: 0});
     else
       this.setState({menuActiveItem: name, slideIndex: 1});
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
         onwardDateChange(e){
           this.setState({onWardDate:new Date(e.target.value).toString()});
         }
         onwardDateChange1(e){
           this.setState({onWardDate1:new Date(e.target.value).getTime()});
         }
         onwardDateChange2(e){
           this.setState({onWardDate2:new Date(e.target.value).getTime()});
         }

  render() {
    var buttonstatus=true;
    if(this.state.onWardDate1!=0 && this.state.onWardDate2!=0){
      buttonstatus=false;
    }
    else {
      buttonstatus=true;
    }
    console.log(!this.state.onWardDate);
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher >
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.props.notifications.icon} />
            <center style={{marginTop:"10px"}}><span as='h4' className="subheaders">Search Flight</span></center>
              <Menu pointing secondary inverted>
                <Menu.Item name='One way' className="subheaders" style={{color:"white"}} active={this.state.menuActiveItem === 'One way'} onClick={this.handleItemClick} />
                <Menu.Item name='Round Trip' className="subheaders" style={{color:"white"}} active={this.state.menuActiveItem === 'Round Trip'} onClick={this.handleItemClick}/>
              </Menu>
                <SwipeableViews index={this.state.slideIndex} disabled >
                <div style={{overflow:"hidden"}}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={14}>
                    <Dropdown fluid placeholder='From' className='drop1' search selection options={fromStateOptions} />
                    <Dropdown fluid placeholder='To' className='drop1' search selection options={toStateOptions} style={{marginTop:'10px'}}/>
                    <Form style={{marginTop:'10px'}}>
                    <Form.Field>
                      <label className="subheaders" style={{color:"white"}}>Onward</label>
                      <input placeholder='Onward' type="date" style={{opacity:"0.6"}} onChange={this.onwardDateChange.bind(this)} />
                    </Form.Field>
                    </Form>
                    <br/>
                    <span className="subheaders">Adult
                    <Button icon inverted style={{marginLeft:'145px',marginRight:'10px'}} onClick={()=>{this.setState({adult:this.state.adult-1})}}><Icon name="minus"/></Button>{this.state.adult}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({adult:this.state.adult+1})}}><Icon name="plus"/></Button></span><br/><br/>
                    <span className="subheaders">Children
                    <Button icon inverted style={{marginLeft:'120px',marginRight:'10px'}} onClick={()=>{this.setState({child:this.state.child-1})}}><Icon name="minus"/></Button>{this.state.child}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({child:this.state.child+1})}}><Icon name="plus"/></Button></span><br/><br/>
                    <span className="subheaders">Infant
                    <Button icon inverted style={{marginLeft:'140px',marginRight:'10px'}} onClick={()=>{this.setState({infant:this.state.infant-1})}}><Icon name="minus"/></Button>{this.state.infant}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({infant:this.state.infant+1})}}><Icon name="plus"/></Button></span><br/>
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
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <br/>
                <center><Button as={Link} to={`/flightsearchresult/${this.state.onWardDate}`} disabled={!this.state.onWardDate} inverted><Icon name="plane" />Search Flight</Button></center>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                <div style={{overflow:"hidden"}}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={14}>
                    <Dropdown fluid placeholder='From' search selection options={fromStateOptions} className='drop1'/>
                    <Dropdown fluid placeholder='To' search selection options={toStateOptions} className='drop1' style={{marginTop:'10px'}}/>
                    <Form style={{marginTop:'10px'}}>
                    <Form.Field>
                      <label className="subheaders" style={{color:"white"}}>Onward</label>
                      <input placeholder='Onward' onChange={this.onwardDateChange1.bind(this)}  type="date" style={{opacity:"0.6"}} />
                    </Form.Field>
                    </Form>
                    <Form style={{marginTop:'10px'}}>
                    <Form.Field>
                      <label className="subheaders" style={{color:"white"}}>Return</label>
                      <input placeholder='return' onChange={this.onwardDateChange2.bind(this)} type="date" style={{opacity:"0.6"}} />
                    </Form.Field>
                    </Form>
                    <br/>
                    <span className="subheaders">Adult
                    <Button icon inverted style={{marginLeft:'145px',marginRight:'10px'}} onClick={()=>{this.setState({adult:this.state.adult-1})}}><Icon name="minus"/></Button>{this.state.adult}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({adult:this.state.adult+1})}}><Icon name="plus"/></Button></span><br/><br/>
                    <span className="subheaders">Children
                    <Button icon inverted style={{marginLeft:'120px',marginRight:'10px'}} onClick={()=>{this.setState({child:this.state.child-1})}}><Icon name="minus"/></Button>{this.state.child}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({child:this.state.child+1})}}><Icon name="plus"/></Button></span><br/><br/>
                    <span className="subheaders">Infant
                    <Button icon inverted style={{marginLeft:'140px',marginRight:'10px'}} onClick={()=>{this.setState({infant:this.state.infant-1})}}><Icon name="minus"/></Button>{this.state.infant}<Button icon inverted style={{marginLeft:'10px'}} onClick={()=>{this.setState({infant:this.state.infant+1})}}><Icon name="plus"/></Button></span><br/>
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
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <br/>
                <center><Button as={Link} to={`/onwardTripSearchResult/${this.state.onWardDate1}/${this.state.onWardDate2}`} inverted disabled={buttonstatus}><Icon name="plane"/>Search Flight</Button></center>
                </div>
                </SwipeableViews>
                <br/>
                <br/>
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
