import React from 'react';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {HashRouter, Route, Link} from 'react-router-dom';

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider,
  Advertisement,
  Modal,
  Image
} from 'semantic-ui-react';

const dataSet = [
  {
    image: 'https://i.pinimg.com/736x/44/55/d9/4455d96357fb041d1cf3c8a5264ed593--titanic-leonardo-dicaprio-leonardo-dicaprio-kate-winslet.jpg',
    name: 'Titanic'
  }, {
    image: 'https://s-media-cache-ak0.pinimg.com/originals/3a/ef/2b/3aef2be950e359df21a765430a6ad33c.jpg',
    name: 'The Dark Knight'
  }, {
    image: 'https://s-media-cache-ak0.pinimg.com/originals/f1/12/8e/f1128ea60009e1985bfeeeac7e3f7b22.jpg',
    name: 'Avatar'
  }, {
    image: 'https://i.pinimg.com/736x/f8/b0/3b/f8b03b1ff3d08d973544b4736908137e--thor-dvd-thor-film.jpg',
    name: 'Thor Rangork'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJzmA2AQs5x0yv3ugAe254h2KarwwKzbhqPqUZdpkwJ6Pzm9AzA',
    name: 'Captain America: Civil War'
  }, {
    image: 'data:image/png;base64,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',
    name: 'God Father'
  }
]

class NetFlix extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      modalState: false,
      movies: '',
      modal:true

    }
  }

  componentWillMount() {
    var temp = [];

    temp.push(dataSet.map((item, i) => {
      return (<Grid.Column key={i}>
        <Card style={{backgroundColor:'rgba(255,255,255,0)',boxShadow:'none'}}>
          <Image src={item.image} style={{
              marginTop: '5px'
            }}/>
          <Card.Content extra="extra">
            <center>
              <Button.Group >
                <Button inverted>
                  <span style={{
                      fontSize: '10px'
                    }}>Watch</span>
                </Button>
              </Button.Group>
            </center>
          </Card.Content>
        </Card>
      </Grid.Column>)
    }));
    this.setState({movies: temp});
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
    return (<div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical="vertical" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
            <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
              <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
              <Grid columns={2}>
                {this.state.movies}
              </Grid>
            </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Modal open={this.state.modal} basic="basic" size='small'>
        <Header icon='video camera' content='In flight Wifi connectivity'/>
        <Modal.Content>
          <p>GoGo offers you an inflight Wifi for $20. Since you have a netflix account already you can enjoy movies on netflix with GoGo for $10</p>
        </Modal.Content>
        <Modal.Actions>
        <Button as={Link} to={`/homepage1/${x}`} color='red' inverted="inverted" onClick={()=>{this.setState({modal:false})}}>
          <Icon name='close'/>
          Close
        </Button>
          <Button color='green' inverted="inverted" onClick={()=>{this.setState({modal:false})}}>
            <Icon name='video camera'/>
            Watch
          </Button>
        </Modal.Actions>
      </Modal>
    </div>)
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(NetFlix);
