import React from 'react'
import {Header,Menu, Segment,Card,Image,Button,Grid,Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BoardingPass extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    var temp = '';
    if(this.props.notifications.gift)
    {
      temp=( <div>
        <br/>
        <br/>
        <span className="subheaders" style={{fontSize:"25px"}}>Gift Vouchers</span>
        <Segment style={{opacity:0.3}}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
          <center> <span className="subheaders" style={{color:"black",fontSize:"25px",fontWeight:"bold"}}>Lounge Access Gift Voucher</span></center>
          <br/>
          <center> <span className="subheaders" style={{color:"black",fontSize:"25px",fontWeight:"bold"}}>Bar Code</span></center>
          <br/>
          <center><Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Barcode2of5example.svg/800px-Barcode2of5example.svg.png'/></center>
           <br/>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
         </Grid>
        </Segment>
              </div>);
            }
    return(
      <div>
      <Card fluid color="red" style={{background:"url('./../../images/Phoenix50darkened.jpg')"}}>
        <Card.Content>
          <span style={{float:'right',textDecoration:'bold',color:"white"}}>{new Date(new Date().setUTCDate(new Date().getDate()+27)).toDateString()}</span>
          <Card.Header>
            <span style={{color:'white'}}>Flight Booking</span>
          </Card.Header>
          <Segment inverted style={{padding:'1px',backgroundColor:'white'}}>
          </Segment>
          <Card.Description style={{marginTop:"-20px"}}>
          <br/>
          <Grid >
            <Grid.Row>
              <Grid.Column width={5}>
              <Header as='h3' style={{color:'white'}}>{this.props.obj.from}</Header>
              <Header as='h5' style={{margin:'0px',color:'white'}}>{this.props.obj.fromAbbrevation}</Header>
              </Grid.Column>
              <Grid.Column width={6}>
              <center>
              <Icon name='long right arrow' size='large' style={{color:"white"}}/>
              </center>
              </Grid.Column>
              <Grid.Column width={5}>
              <Header as='h3' style={{color:'white'}}>{this.props.obj.to}</Header>
              <Header as='h5' style={{margin:'0px',color:'white'}}>{this.props.obj.toAbbrevation}</Header>
              </Grid.Column>
             </Grid.Row>
             </Grid>
            <Segment inverted style={{padding:'1px',backgroundColor:'white'}}>
            </Segment>
            <Grid>
             <Grid.Row>
               <Grid.Column width={4}>
               <Header as='h4' style={{color:'white'}}>Departs</Header>
               </Grid.Column>
               <Grid.Column width={4}>
               <Header as='h4' style={{color:'white'}}>Arrives</Header>
               </Grid.Column>
               <Grid.Column width={4}>
               <Header as='h4' style={{color:'white'}}>Airlines</Header>
               </Grid.Column>
               <Grid.Column width={4}>
               <Header as='h4' style={{color:'white'}}>PNR</Header>
               </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={4}>
                <Header as='h4' style={{color:"white"}}>{this.props.obj.time}</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                <Header as='h4' style={{color:"white"}}>{this.props.obj.arrives}</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                <Header as='h4' style={{color:"white"}}>{this.props.obj.flightNo}</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                <Header as='h4' style={{color:"white"}}>{this.props.obj.pnr}</Header>
                </Grid.Column>
               </Grid.Row>

              </Grid>

              <Segment inverted style={{padding:'1px',backgroundColor:'white'}}>
              </Segment>

          </Card.Description>
        </Card.Content>
        <Card.Content extra="extra">
        <center>
        <Image size='small' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Barcode2of5example.svg/800px-Barcode2of5example.svg.png" />
        </center>
        </Card.Content>
      </Card>
      {temp}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(BoardingPass);
