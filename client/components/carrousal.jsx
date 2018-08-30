import React from 'react';
import {
  Card,
  Button,
  Image,
  Grid,
  Icon,
  Segment,
  Divider
} from 'semantic-ui-react'

import UpcommingTravelCard from './upcommingTravelCard.jsx';
import SwipeableViews from 'react-swipeable-views';
const styles = {
  slideContainer: {
     padding: '0px',
    width: '87%'
  }
};
class Carousel extends React.Component {
  render() {
    return (<div>
      <SwipeableViews slideStyle={styles.slideContainer}>
          <UpcommingTravelCard />
          <UpcommingTravelCard />
          <UpcommingTravelCard />
          <UpcommingTravelCard />
      </SwipeableViews>
    </div>);
  }
}
export default Carousel;
