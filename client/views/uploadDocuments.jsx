import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header,Sidebar,Menu, Modal, List,Checkbox} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import HeaderComponent from './../components/header.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UploadDocs extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      open: false,
      confirmation: false
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
  handleOpen(){
    this.setState({ open: !this.state.open })
  }
  handleClose(){
    this.setState({
      open: !this.state.open,
      confirmation: true
    })
  }
  handleCloseConfirmation(){
    this.setState({
      confirmation: false
    })
  }
  render(){
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
    return(
      <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.props.notifications.icon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
            <br/>
            <br/>
            <center><span className="subheaders" style={{fontSize:"25px"}}>E-Checkin</span></center>
            <br/>
            <br/>
          <Grid>
            <Grid.Row>
              <Grid.Column style={{textAlign:'center'}}>
                <Grid.Row>
                    <span className="subheaders" style={{fontSize:"25px"}}>Now you can complete your E-Checkin and upload all documents</span>
              </Grid.Row>
              <Grid.Row>
              <br/>
              <br/>
                <Button inverted onClick={this.handleOpen.bind(this)}>Upload Documents</Button>
              </Grid.Row>
              </Grid.Column>
              <Modal basic size='tiny' open={this.state.open} style={{padding:'5px'}}>
                <Modal.Header>
                  Upload Documents
                </Modal.Header>
                <Modal.Content>
                  <List divided relaxed>
                    <List.Item>
                      <List.Content>
                        <List.Header><span className="subheaders">Driver's Licence</span> <Checkbox style={{float:'right'}}/></List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header><span className="subheaders">ABC Card</span> <Checkbox style={{float:'right'}}/></List.Header>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header><span className="subheaders">XYZ Card</span> <Checkbox style={{float:'right'}}/></List.Header>
                      </List.Content>
                    </List.Item>
                  </List>
                </Modal.Content>
                <Modal.Actions>
                  <Button positive icon='checkmark' labelPosition='right' content='Upload' onClick={this.handleClose.bind(this)}/>
                </Modal.Actions>
              </Modal>
              <Modal basic open={this.state.confirmation} basic size='small'>
                <Header content='Successful' />
                <Modal.Content>
                  <p>Successfully Uploaded all the Documents</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' as={Link} to={`/homepage1/${x}`} inverted onClick={this.handleCloseConfirmation.bind(this)}>
                    <Icon name='checkmark' /> OK
                  </Button>
                </Modal.Actions>
              </Modal>
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

export default connect(mapStateToProps, null)(UploadDocs);
