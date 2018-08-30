import _ from "lodash";
import React from 'react';
import Helmet from "react-helmet";
import {
  Dimmer
} from 'semantic-ui-react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

export default class GettingStartedExample extends React.Component {

  constructor() {
    super();
    this.state = {
      active: true,
      markers :[],
      lat:0.0,
      lng:0.0
    }
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleClos() {
    this.setState({active: false});
  }
  // handleMapLoad = this.handleMapLoad.bind(this);
  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      // console.log(map.getZoom());

    }
  }
  render() {
    let lat = parseFloat(this.props.lat);
    let lng = parseFloat(this.props.lng);
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap ref={props.onMapLoad} defaultZoom={19} defaultCenter={{
        lat: lat,
        lng:lng
      }} onClick={props.onMapClick}>
        {props.markers.map(marker => (<Marker {...marker}/>))}
      </GoogleMap>
    ));

    let markers =  [{
      position: {
        lat: lat,
        lng: lng,
      }
    }]

    const {active} = this.state;
//let data = this.state.markers
    return (
      <div style={{
        height: `500px`
      }}>
        <Helmet title="Getting Started"/>
        <GettingStartedGoogleMap
        containerElement={< div style = {{ height: `100%` }}/>}
        mapElement={< div style = {{ height: `100%` }}/>}
        onMapLoad={this.handleMapLoad}
        markers={markers}/>
      </div>

    );
  }
}
