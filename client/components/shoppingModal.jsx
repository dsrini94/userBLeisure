import React from 'react';
import {Button, Header, Image, Modal, Icon} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import BuyShoppingModal from './buyShoppingModal.jsx';

export default class ShoppingModal extends React.Component {
  constructor(props) {
    super(props)
    this.state={buyModalOpen:false}
    this.handleModal = this.handleModal.bind(this);
    this.buyModalClose = this.buyModalClose.bind(this);
  }

  buyModalClose()
  {
    this.setState({buyModalOpen:!this.state.buyModalOpen});
  }

  handleModal()
  {
    this.props.modalClose();
    this.setState({buyModalOpen:!this.state.buyModalOpen});
  }

  render() {
    return (<div>
      <Modal open={this.props.modalOpen}>
        <Modal.Header style={{
            color: '#800000'
          }}>{this.props.selectedProduct.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.props.selectedProduct.image}/>
          <Modal.Description>
            <Header style={{
                color: '#800000'
              }}>Product Description</Header>
            <p>{this.props.selectedProduct.desc}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.props.modalClose()}>
            <Icon name='remove'/>
            close window
          </Button>
          <Button color='green' onClick={this.handleModal}>
            <Icon name='credit card alternative'/>
            Buy
          </Button>
        </Modal.Actions>
      </Modal>

      <BuyShoppingModal openState={this.state.buyModalOpen} selectedProduct={this.props.selectedProduct} buyModalClose={this.buyModalClose}/>

    </div>);
  }
}
