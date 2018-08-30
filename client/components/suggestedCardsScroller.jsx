import React from 'react'
import Slider from 'react-slick';
import SuggestedCards from './suggestedCards.jsx';
export default class SuggestedCardsScroller extends React.Component {
  constructor() {
    super();
  }
    render() {
    var settings = {
      infinite:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:'30px',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    };
    return (
      <Slider {...settings}>
        <div><SuggestedCards onwardFrom='LAX' onwardTo='DEN' returnFrom='DEN' returnTo='LAX' date={new Date().toDateString()} way='RoundTrip'/></div>
        <div><SuggestedCards onwardFrom='DFW' onwardTo='JFK' returnFrom='JFK' returnTo='DFW' date={new Date().toDateString()} way='RoundTrip'/></div>
        <div><SuggestedCards onwardFrom='ATL' onwardTo='LAS' returnFrom='LAS' returnTo='ATL' date={new Date().toDateString()} way='RoundTrip'/></div>
      </Slider>
    );
  }
}
