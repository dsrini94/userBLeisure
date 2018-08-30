import React from 'react';

import {
  Card,
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react';

import Slider from 'react-slick';
import {HashRouter, Route, Link} from 'react-router-dom';
import HeaderComponent from './../components/header.jsx';

export default class PreHotel extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
        <div>
          <HeaderComponent heading={'Pre Hotel Requisites'}/>
          <br/>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Checkbox slider />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}
