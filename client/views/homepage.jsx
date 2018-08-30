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
  Form,Sidebar, Segment, Menu
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';

 class Test extends React.Component {
   constructor(props)
   {
     super(props);
   }

   componentDidMount()
   {

   }
  render() {
    console.log(this.props.notifications.case1,"caseno");
    var b1='';
    // if(this.props.notifications.case1==2){
    //   b1='https://i.pinimg.com/736x/44/55/d9/4455d96357fb041d1cf3c8a5264ed593--titanic-leonardo-dicaprio-leonardo-dicaprio-kate-winslet.jpg'
    // }
    // else if(this.props.notifications.case1==3){
    //   b1='https://s-media-cache-ak0.pinimg.com/originals/3a/ef/2b/3aef2be950e359df21a765430a6ad33c.jpg'
    // }
    // else if(this.props.notifications.case1==4){
    //   b1='https://s-media-cache-ak0.pinimg.com/originals/f1/12/8e/f1128ea60009e1985bfeeeac7e3f7b22.jpg'
    // }
    // else if(this.props.notifications.case1==5){
    //   b1='https://i.pinimg.com/736x/f8/b0/3b/f8b03b1ff3d08d973544b4736908137e--thor-dvd-thor-film.jpg'
    // }
    // else if(this.props.notifications.case1==48){
    //   b1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJzmA2AQs5x0yv3ugAe254h2KarwwKzbhqPqUZdpkwJ6Pzm9AzA'
    // }
    // else if(this.props.notifications.case1=='inFlight'){
    //   b1='../images/darkbg.jpg'
    // }
    // else if(this.props.notifications.case1=='atAirport'){
    //   b1='../images/darkbg.jpg'
    // }
    // else if(this.props.notifications.case1=='desAirport'){
    //   b1='../images/darkbg.jpg'
    // }
    // else if(this.props.notifications.case1=='atCab'){
    //   b1='../images/darkbg.jpg'
    // }
    // else if(this.props.notifications.case1=='atHotel'){
    //   b1='../images/darkbg.jpg'
    // }
    // else{
    //   b1='../images/darkbg.jpg'
    // }
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar transparent={true} as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} vertical icon='labeled' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.props.notifications.icon} />
              <br/>
            <center style={{marginTop:'-15px',fontWeight:'bolder'}}><span className="subheaders">Upcoming Travel</span></center>
            <div>
            <Carousel dragging={true} wrap={false} edgeEasing="easeOutCirc" style={{height:'255px'}}>
            {this.props.notifications.travelData.map((item,i)=>{
              return(
              <div  key={i} style={{padding:"10px"}}>
              <Card fluid style={{
                            background:"url("+item.image+")",
                            marginTop:"auto",
                            boxShadow:"none"}}>
                <Card.Content>

                  <Card.Description>
                  <Grid>
                  <Grid.Row style={{marginBottom:"-20px"}}>
                    <Grid.Column>
                    <Header as="h6" style={{color:"white"}}>{item.date} 17:20</Header>
                    </Grid.Column>
                  </Grid.Row>
                    <Grid.Row >
                      <Grid.Column>
                      <Header as="h6" style={{color:"white"}}>Seat  {item.Seat} Terminal  {item.Terminal} Gate {item.Gate}</Header>
                      <Header as="h6" style={{marginTop:"-45px"}} inverted floated="right">Duration {item.tt}</Header>
                      </Grid.Column>

                    </Grid.Row>
                    <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                      <Grid.Column width={6}>
                      <center>
                          <Header style={{color:'white',fontSize:"25px"}}>{item.source}</Header>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <center>
                      <Header style={{fontSize:'12px',color:'white',border:'none',marginBottom:'0px',marginTop:'-10px'}}>{item.flightNo}</Header>
                      <Icon name='long arrow right' style={{color:'white'}} size="large"/>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <center>
                        <Header style={{color:'white',fontSize:"25px",margin:"0px"}}>{item.destination}</Header>
                        </center>
                      </Grid.Column>
                    </Grid.Row>


                    <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                      <Grid.Column width={6}>
                      <center>
                          <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.sourceName}</Header>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <center>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <center>
                        <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.destinationName}</Header>
                        </center>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>
                  </Card.Description>

                </Card.Content>
                <Card.Content extra>
                  <center>
                    <Link to={`/SelectedSuggestedFlightComponent/${'upcoming'}/${'OneWay'}/${item.source}/${item.destination}/${'0'}`}>
                    <Button size="tiny" color="red" style={{marginTop:"-5px"}}>Modify</Button>
                    </Link>
                  </center>
                </Card.Content>
            </Card>
            </div>
          )
        })}
            </Carousel>
            </div>
            <center style={{marginTop:'-20px',fontWeight:'bolder'}}><span className="subheaders">Suggested Itinerary</span></center>
            <div>
            <Carousel dragging={true} wrap={false} edgeEasing="easeOutCirc" style={{height:'245px'}}>
            {this.props.notifications.suggestedData.map((item,i)=>{
              return(
              <div  key={i} style={{padding:"10px"}}>
              <Card fluid style={{
                            background:"url("+item.image+")",
                            marginTop:"auto",
                          border:'none',boxShadow:"none"}}>
                <Card.Content>

                  <Card.Description>
                  <Grid>
                  <Grid.Row style={{marginBottom:"-20px"}}>
                    <Grid.Column>
                    <Header as="h6" style={{color:"white",margin:"0px"}}>{item.date} 17:20</Header>
                    <Header as="h6" style={{marginTop:"-10px"}} inverted floated="right">{item.travelType}</Header>
                    </Grid.Column>
                  </Grid.Row>
                    <Grid.Row >
                      <Grid.Column>
                      <Header as="h6" style={{color:"white",margin:"0px"}}>Duration 3 Hrs</Header>
                      </Grid.Column>

                    </Grid.Row>
                    <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                      <Grid.Column width={6}>
                      <center>
                          <Header style={{color:'white',fontSize:"25px"}}>{item.source}</Header>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <center>
                      <Header style={{fontSize:'12px',color:'white',border:'none',marginBottom:'0px',marginTop:'-10px'}}>{item.flightNo}</Header>
                      <Icon name='long arrow right' style={{color:'white'}} size="large"/>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <center>
                        <Header style={{color:'white',fontSize:"25px",margin:"0px"}}>{item.destination}</Header>
                        </center>
                      </Grid.Column>
                    </Grid.Row>


                    <Grid.Row style={{marginLeft:"-6px",marginTop:"-15px"}}>
                      <Grid.Column width={6}>
                      <center>
                          <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.sourceName}</Header>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={4}>
                      <center>
                      </center>
                      </Grid.Column>
                      <Grid.Column width={6}>
                      <center>
                        <Header inverted as={'h6'} style={{marginTop:"-10px",padding:"0px",border:"none"}}>{item.destinationName}</Header>
                        </center>
                      </Grid.Column>
                    </Grid.Row>
                    </Grid>
                  </Card.Description>

                </Card.Content>
                <Card.Content extra>
                  <center>
                    <Link to={`/SelectedSuggestedFlightComponent/${'suggested'}/${'OneWay'}/${item.source}/${item.destination}/${'1'}`}>
                    <Button size="tiny" color="red" style={{marginTop:"-5px"}}>Book</Button>
                    </Link>
                  </center>
                </Card.Content>
            </Card>
            </div>
          )
        })}
            </Carousel>
            </div>
            <br/>
            <Grid style={{marginTop:'-52px'}}>
              <Grid.Row>
                <Grid.Column width={12}>
                  <center>
              <Button as={Link} to='/search'  inverted style={{position:'absolute'}}>
                <Icon name="plane" />Fly New
              </Button>
              </center>
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
