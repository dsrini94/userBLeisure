import React from 'react';
import {Header,Menu, Segment,Card,Image,Button,Grid,Icon} from 'semantic-ui-react';
import HeaderComponent from './header.jsx'
import SwipeableViews from 'react-swipeable-views';
import BoardingPass from './boardingPass.jsx'

const obj=[{
  from:'MIA',
  to:'DEN',
  fromAbbrevation:'Miami',
  toAbbrevation:'Denver',
  time:'23:20',
  arrives:'02:20',
  flightNo:'FA1234',
  pnr:'D94ENF'
},
{
  from:'ATL',
  to:'ORD',
  fromAbbrevation:'Atlanta',
  toAbbrevation:'Chicago',
  time:'12:20',
  arrives:'06:20',
  flightNo:'FA1234',
  pnr:'F94END'
}]

export default class WalletComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
      activeItem: 'Flight'
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    if (name == 'Flight')
      this.setState({activeItem: name, slideIndex: 0});
    else if (name == 'Hotel')
      this.setState({activeItem: name, slideIndex: 1});
    else
      this.setState({activeItem: name, slideIndex: 2});

    }

  render() {
    return (<div>
      <HeaderComponent heading="Digital Wallet"/>
      <Menu pointing="pointing" secondary="secondary">
        <Menu.Item name='Flight' active={this.state.activeItem === 'Flight'} onClick={this.handleItemClick}/>
        <Menu.Item name='Hotel' active={this.state.activeItem === 'Hotel'} onClick={this.handleItemClick}/>
        <Menu.Item name='Cab' active={this.state.activeItem === 'Cab'} onClick={this.handleItemClick}/>
      </Menu>
      <Grid>
        <div>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={14}>
              <BoardingPass obj={obj[0]}/>
              <BoardingPass obj={obj[1]}/>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </Grid>
    </div>);
  }
}
