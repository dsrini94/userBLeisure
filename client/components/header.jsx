import React from 'react';
import { Header } from 'semantic-ui-react';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Header as='h3' textAlign='center' block inverted style={{
        backgroundColor: '#800000',margin:'10px'
      }}>
      {this.props.heading}
    </Header>);
  }
}
