import React from 'react';
import {
  Grid,
  Image,
  Card,
  Button,
  Label,
  Statistic
} from 'semantic-ui-react';
import HeaderComponent from './header.jsx';
import ShoppingModal from './shoppingModal.jsx';
import NewBuyShoppingModal from './newBuyShoppingModal.jsx';


const dataSet = [
  {
    image: './../../images/perfume5.png',
    name: 'Pleasures Bloom',
    price: '$120',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  },
  {
    image: './../../images/perfume3.png',
    name: 'Mordern Muse Nuit',
    price: '$160',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  },
  {
    image: './../../images/perfume4.png',
    name: 'Pure White Linen',
    price: '$200',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  },
  {
    image: './../../images/perfume6.png',
    name: 'Beyond Paradise',
    price: '$170',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  },
  {
    image: 'http://www.pngall.com/wp-content/uploads/2016/03/Wine-Free-PNG-Image.png',
    name: 'Red Wine',
    price: '$100',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  }, {
    image: 'http://www.chicagonow.com/code-purple-gold/files/2017/04/dj.png',
    name: 'Headphone',
    price: '$250',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://www.pngall.com/wp-content/uploads/2016/05/Jacket-Free-PNG-Image.png',
    name: 'Jacket',
    price: '$70',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://www.pngall.com/wp-content/uploads/2016/05/Perfume-Free-Download-PNG.png',
    name: 'Senseous',
    price: '$50',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://www.pngall.com/wp-content/uploads/2016/04/Watch-PNG-Clipart.png',
    name: "Men's Watches",
    price: '$250',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://www.pngall.com/wp-content/uploads/2016/04/Suitcase-Transparent.png',
    name: 'Trolley bags',
    price: '$300',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }
]
export default class NewShoppingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: '',
      selectedProduct:'',
      modalOpen:false,
      buyModalOpen:false
    }
    this.handleView = this.handleView.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.buyModalClose = this.buyModalClose.bind(this);

  }

  buyModalClose()
  {
    this.setState({buyModalOpen:!this.state.buyModalOpen});
  }
  handleBuy(item)
  {
    this.setState({selectedProduct:item,buyModalOpen:!this.state.buyModalOpen});
  }
  modalClose()
  {
    this.setState({modalOpen:!this.state.modalOpen})
  }
  handleView(item)
  {
    this.setState({selectedProduct:item,modalOpen:!this.state.modalOpen})
  }

  componentWillMount() {
    var temp = [];
    var p='';
    temp.push(dataSet.map((item, i) => {
      if(item.name=="Trolley bags"){
        p=(<Image src={item.image} style={{marginTop:'5px',height:'160.56px'}}/>)
      }
      else{
        p=(<Image src={item.image} style={{marginTop:'5px'}}/>)
      }
      return (<Grid.Column key={i}>
        <Card style={{backgroundColor:'rgba(255,255,255,0)',boxShadow:'none'}}>
          {p}
          <Card.Content>
            <Card.Header>
              <br/>
              <center>
              <Statistic size={'mini'} >
                <Statistic.Value style={{marginBottom:'5px'}}><span className="subheaders" >{item.price}</span></Statistic.Value>
                <Statistic.Label ><span className="subheaders" >{item.name}</span></Statistic.Label>
              </Statistic>
              </center>
            </Card.Header>

          </Card.Content>
          <Card.Content extra>
            <center>
            <Button.Group >
              <Button inverted onClick={()=>this.handleBuy(item)}><span style={{fontSize:'10px'}}>Buy</span></Button>
            </Button.Group>
            </center>
          </Card.Content>
        </Card>
      </Grid.Column>)
    }));
    this.setState({products: temp});
  }

  render() {
    return (<div>
      <center>
      <span className="subheaders">Airport Shopping</span>
      <br/>
      <br/>
      </center>
      <Grid columns={2}>
        {this.state.products}
      </Grid>
      <ShoppingModal modalOpen={this.state.modalOpen} selectedProduct={this.state.selectedProduct} modalClose={this.modalClose}/>
      <NewBuyShoppingModal openState={this.state.buyModalOpen} selectedProduct={this.state.selectedProduct} buyModalClose={this.buyModalClose}/>
    </div>);
  }
}
