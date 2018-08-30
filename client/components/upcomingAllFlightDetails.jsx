import React from 'react'
import {Grid, Input, Icon, Divider, Button, Card,Segment,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';
import UpcomingFlightDetails from './upcomingFlightDetails.jsx';
import Slider from 'react-slick';

export default class upcomingAllFlightDetails extends React.Component {
  constructor() {
    super();
  }
    render() {
    var settings = {
      infinite:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding:'20px',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
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
      <div>
      <Slider {...settings}>
        <div><UpcomingFlightDetails upcomingFrom="MIA" upcomingTo="DEN" upcomingFromDetail="Miami" upcomingToDetail="Denver" flighNumber="FN0101" date={new Date(new Date().setUTCDate(new Date().getDate()+7)).toDateString()} time="23:00-00:00" way='OneWay'/></div>
        <div><UpcomingFlightDetails upcomingFrom="ATL" upcomingTo="ORD" upcomingFromDetail="Atlanta" upcomingToDetail="Chicago" flighNumber="FN0102" date={new Date(new Date().setUTCDate(new Date().getDate()+18)).toDateString()} time="20:00-21:00" way='OneWay'/></div>
        <div><UpcomingFlightDetails upcomingFrom="IIH" upcomingTo="PHX" upcomingFromDetail="Houston" upcomingToDetail="Phoenix" flighNumber="FN0103" date={new Date(new Date().setUTCDate(new Date().getDate()+25)).toDateString()} time="19:00-20:00" way='OneWay'/></div>
        <div><UpcomingFlightDetails upcomingFrom="EWR" upcomingTo="MCO" upcomingFromDetail="Newark" upcomingToDetail="Orlando" flighNumber="FN0104" date={new Date(new Date().setUTCDate(new Date().getDate()+36)).toDateString()} time="17:00-20:00" way='OneWay'/></div>
        <div><UpcomingFlightDetails upcomingFrom="BOS" upcomingTo="HNL" upcomingFromDetail="Boston" upcomingToDetail="Honolu" flighNumber="FN0105" date={new Date(new Date().setUTCDate(new Date().getDate()+49)).toDateString()} time="19:00-20:00" way='OneWay'/></div>
        <div><UpcomingFlightDetails upcomingFrom="TPA" upcomingTo="PDX" upcomingFromDetail="Tampa" upcomingToDetail="Portland" flighNumber="FN0106" date={new Date(new Date().setUTCDate(new Date().getDate()+70)).toDateString()} time="19:00-20:00" way='OneWay'/></div>
      </Slider>
      </div>
    );
  }
}
