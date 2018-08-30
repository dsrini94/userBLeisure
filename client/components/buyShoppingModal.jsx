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

export default class BuyShoppingModal extends React.Component {

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
          <span className="subheaders">Wishlist</span>
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
            <center><Header as='h4' style={{color:'#800000'}}><span className="subheaders">Product added to your wishlist</span></Header></center>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={() => this.props.buyModalClose()}>
            <Icon name='checkmark'/>
            Done
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal open={this.state.confirmation} basic="basic" size='small'>
        <Header icon='credit card alternative' content='Payment Successfull'/>
        <Modal.Content>
          <p>Thank you for purchasing {this.props.selectedProduct.name}. Now you can collect your product at our duty free shop</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' fluid inverted onClick={()=>{this.setState({confirmation:!this.state.confirmation})}}>
            <Icon name='checkmark'/>
            close window
          </Button>
        </Modal.Actions>
      </Modal>

    </div>);
  }
}
