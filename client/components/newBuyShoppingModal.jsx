import React from 'react'
import {
  Divider,
  Statistic,
  Button,
  Icon,
  Modal,
  Radio,
  Image,
  Header,
  Input
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';


export default class NewBuyShoppingModal extends React.Component {

  constructor()
  {
    super();
    this.state={confirmation:false}
    this.handleConfirmationDialouge = this.handleConfirmationDialouge.bind(this);

  }

  handleConfirmationDialouge()
  {
    this.props.buyModalClose();
    this.setState({confirmation:!this.state.confirmation})
  }

  render() {
    return (<div>
      <Modal open={this.props.openState} basic>
        <Modal.Header>
        <Icon name='cart'/>
          <span className="subheaders">Purchase</span>
        </Modal.Header>
        <Modal.Content image="image">
          <Image src={this.props.selectedProduct.image} size='tiny'/>
          <Statistic size={'mini'}>
            <Statistic.Value style={{
                color: '#800000',
                marginBottom: '5px'
              }}><span className="subheaders">{this.props.selectedProduct.price}</span></Statistic.Value>
            <Statistic.Label style={{
                color: '#800000'
              }}><span className="subheaders">{this.props.selectedProduct.name}</span></Statistic.Label>
          </Statistic>
          <Modal.Description>
            <center><Header as='h4' style={{color:'#800000'}}><span className="subheaders">Buy at our Store</span></Header></center>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' style={{marginLeft:'0%'}} onClick={() => this.props.buyModalClose()}>
            <Icon name='close'/>
            Close
          </Button>
          <Button color='olive' onClick={() => {this.setState({deliverModal:true})}}>
            <Icon name='home'/>
            Deliver
          </Button>
          <Button as={Link} to='/orgMap' color='green' onClick={() => this.props.buyModalClose()}>
            <Icon name='map'/>
            Navigate
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal basic open={this.state.deliverModal}>
        <Modal.Content>
          <span className="subheaders">
            Your selected item is on the way!
          </span>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' style = {{margin:"30px"}}
          onClick = {
             () => {this.props.buyModalClose(),
               this.setState({
                 deliverModal: false
               })
             }
           }><Icon name='cancel' />Close</Button>
        </Modal.Actions>
       </Modal>

    </div>);
  }
}
