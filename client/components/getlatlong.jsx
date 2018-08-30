import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
// import UpcomingFlightDetails from './upcomingFlightDetails.jsx';
import Slider from 'react-slick';
import GMap from './GMap.jsx';

export default class getlatlong extends React.Component {
  constructor() {
    super();
    this.state={
      lat: 0.0,
      lng: 0.0
    }
    this.showResult = this.showResult.bind(this);
  }
  componentWillMount() {
    let address = this.props.location;
    this.getLatitudeLongitude(this.showResult, address);
  }

  showResult(result) {
    this.setState({lat: result.geometry.location.lat()});
  this.setState({lng: result.geometry.location.lng()});
//   this.setState({lat: 13.198635});
// this.setState({lng: 77.706593});
  }
  getLatitudeLongitude(callback, address) {
    // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
    address = address || 'Ferrol, Galicia, Spain';
    // Initialize the Geocoder
    let geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          callback(results[0]);
        }
      });
    }
  }
//   closeModal(){
//   this.setState({MapModal: false});
// }

  // <PhleboMap lat={this.state.lat} lng={this.state.lng} closeModal={this.closeModal.bind(this)}/>
    render() {
        return (
          <GMap lat={this.state.lat} lng={this.state.lng}/>
        )
      }
    }
