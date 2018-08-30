import React from 'react';
import {
  Form,
  TextArea,
  Button,
  Segment,
  List,
  Image,
  Card,
  Grid,
  Modal,
  Header,
  Input,
  Icon
} from 'semantic-ui-react'

import {HashRouter, Route, Link} from 'react-router-dom';

export default class ChatComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      listComponent: '',
      resultComponent: '',
      modalOpen:false,
      bookModal:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSend(e) {
    console.log(typeof this.state.text);
    var list = (<List.Item>
      <Image avatar="avatar" src='https://semantic-ui.com/images/avatar/large/helen.jpg'/>
      <List.Content>
        <List.Header as='a'>Claire</List.Header>
        <List.Description>{this.state.text}</List.Description>
      </List.Content>
    </List.Item>);
    if(this.state.text.includes('mexican')||this.state.text.includes('Mexican')){
      console.log("inside res");
    var card = (<Grid>
      <Grid.Row>
        <Grid.Column>
          <center style={{marginTop:"10px",marginBottom:'10px'}}><span as='h4' className="subheaders">Your results are here</span></center>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={14}>
          <Card.Group>
            <Card style= {{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh4.googleusercontent.com/-NSRYEqt87dY/VJSPYU3peQI/AAAAAAAAACE/wEoWI3QZZYUgqxaPy_-rFHyfZhzAS62jACLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Riviera Maya Mexican Restaurant
                </Card.Header>
                <Card.Meta>
                  Mexican favorites & margaritas served in an upbeat atmosphere with vibrant decor & mariachi music.
                </Card.Meta>
                <Card.Description>
                  4041 E Thomas Rd #124, Phoenix, AZ 85018, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                  <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                  <Button basic="basic" style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>


            <Card style={{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh6.googleusercontent.com/-Dduik98e3t8/WaWbAcSbZ4I/AAAAAAABxOg/gBZWrWoggsoAyptjDPMJztMrKMfs2cW-wCLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Lupe Tortilla
                </Card.Header>
                <Card.Meta>
                Regional Tex-Mex chain known for its homemade tortillas & variety of margaritas.
                </Card.Meta>
                <Card.Description>
                  6035 N 7th St, Phoenix, AZ 85014, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                  <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                  <Button basic="basic"  style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>


            <Card style={{backgroundColor: '#A19FA4'}} fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://lh3.googleusercontent.com/-Q4_3fy5BEcw/WaxRtP8MerI/AAAAAAAJGtc/JQJ_MDDvNywJuNjON-ldpeu3sDFgsRXlACLIBGAYYCw/w99-h99-n-k-no/'/>
                <Card.Header>
                  Perlita's Authentic Mexican
                </Card.Header>
                <Card.Meta>
                  Tortas, burritos & other traditional specialties served in a no-nonsense diner with simple decor.
                </Card.Meta>
                <Card.Description>
                  1919 N 16th St, Phoenix, AZ 85006, USA
                </Card.Description>
              </Card.Content>
              <Card.Content extra="extra">
                {/* <div className='ui two buttons'> */}
                <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                <Button basic="basic"  style={{float:'right'}} color='black' onClick={()=>{this.setState({modalOpen:true})}}><Icon name="spoon" />Book a table</Button>
                {/* </div> */}
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
        </Grid>
        )}
        else{
          console.log("inside else");
          var card = (<Grid>
            <Grid.Row>
              <Grid.Column>
                <center style={{marginTop:"10px",marginBottom:'10px'}}><span as='h4' className="subheaders">Events happening around you</span></center>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14}>
                <Card.Group>
                  <Card style= {{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='https://sportsnetholidays.com/wp-content/uploads/2017/09/F1_AUS_woo-banner_500x500.jpg'/>
                      <Card.Header>
                        Formula 1
                      </Card.Header>
                      <Card.Meta>
                        Formula One is the highest class of single-seat auto racing event that is sanctioned by the Fédération Internationale de l'Automobile (FIA)
                      </Card.Meta>
                      <Card.Description>
                      2814 N 16th St, Phoenix, AZ 85006, USA
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                        <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                        </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>


                  <Card style={{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='https://ushuaiaibiza.s3.amazonaws.com/photos/square/2016/160801-david-guetta/160801-012-1472811559.jpg'/>
                      <Card.Header>
                        DJ Show by David Guetta
                      </Card.Header>
                      <Card.Meta>
                      A DJ event by David Guetta, a french DJ, songwriter, record producer and remixer who has sold over nine million albums and 30 million singles worldwide.
                      </Card.Meta>
                      <Card.Description>
                      1830 S Central Ave, Phoenix, AZ 85004, USA
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                        <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                        </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>


                  <Card style={{backgroundColor: '#A19FA4'}} fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsbva8iGUN9QTlye5EDbanunpUWGJWfbKYSaQ7nmHII5NplvU'/>
                      <Card.Header>
                        Annual Golf Outing
                      </Card.Header>
                      <Card.Meta>
                        The 20th Annual Golf Outing is attended by members of the domestic and international hedge fund community, featuring a round of golf followed by a cocktail reception, dinner and live auction.
                      </Card.Meta>
                      <Card.Description>
                        6008 N 16th St, Phoenix, AZ 85016, USA
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra="extra">
                      {/* <div className='ui two buttons'> */}
                      <center>
                      <Button as={Link} to={'/carBooking'} basic="basic" color='black'><Icon name="taxi" />Book a cab</Button>
                      </center>
                      {/* </div> */}
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
              </Grid.Row>
              </Grid>
              )
        }
         this.setState({
          listComponent: list,
          resultComponent: card
        }); }


      render() {
          return (

            <div>

            <Grid>
              <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>

              <Grid.Column width={14}>
                <Form>
                  <TextArea placeholder='Ask me anything about restaurant or places around' style={{
                      minHeight: 100,
                      marginBottom: '10px',
                      borderColor:'#800000',
                      opacity:'0.6'
                    }} onChange={this.handleChange}/>
                </Form>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}/>
                <Grid.Column width={14}>
                  <Button inverted="inverted" style={{
                    float:'right'
                    }} floated='right' onClick={this.handleSend}>
                    Send
                  </Button>
                </Grid.Column>
                <Grid.Column width={1}/>
              </Grid.Row>
              <Grid.Row>
              {/* <Grid.Column width={1}> */}
              {/* </Grid.Column> */}

              <Grid.Column width={16}>
                {/* <Segment style={{
                    minHeight: 200,
                    borderColor:'#800000',
                    opacity:'1.0'
                  }}> */}
                  {this.state.resultComponent}
                {/* </Segment> */}

              </Grid.Column>
            </Grid.Row>
          </Grid>

              {/* <Grid.Column width={1}> */}
              {/* </Grid.Column> */}
              <Modal open={this.state.modalOpen} basic size='small'>
    <Header icon='spoon' content='Book a table' />
    <Modal.Content>
      <span className="subheaders">Enter No of Seaters</span><br/><br/>
      <Input fluid placeholder='Seaters' style={{opacity:0.6}}/>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={()=>{this.setState({modalOpen:false})}}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={()=>{this.setState({modalOpen:false,bookModal:true})}}>
        <Icon name='checkmark' /> Book
      </Button>
    </Modal.Actions>
  </Modal>
  <Modal open={this.state.bookModal} basic size='small'>
<Header icon='spoon' content='Book a table' />
<Modal.Content>
<span className="subheaders">Booking Confirmed</span><br/><br/>
</Modal.Content>
<Modal.Actions>
<Button color='green' inverted onClick={()=>{this.setState({bookModal:false})}}>
<Icon name='checkmark' /> Done
</Button>
</Modal.Actions>
</Modal>
          </div>);
        }
        }
