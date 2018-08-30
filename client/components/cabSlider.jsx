import React from 'react'
import Slider from 'react-slick';
import {
  Card,Image,Header
} from 'semantic-ui-react';
export default class CarSlider extends React.Component
{

  constructor(props) {
  super(props);
}

  handleCabSelect(value)
  {
    this.props.handleCabSelect(value);
  }
  render() {
  var settings = {
    infinite:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div>
    <Slider {...settings}>
      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}}  onClick={this.handleCabSelect.bind(this,"Hertz Cars")}>
        <Image   src='https://pbs.twimg.com/media/C4E_9uYXUAQ43Sd.jpg'/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Hertz Cars</span>
        </Card.Content>
      </Card>
      </div>

      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
        <Image  src='https://writingmachine.com/wp-content/uploads/2016/05/logo-national-featured-540x272.jpg' onClick={this.handleCabSelect.bind(this,"National Cars")}/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>National Cars</span>
        </Card.Content>
      </Card>
      </div>
      <div>
      <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
        <Image  style={{margin:'3px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3xEtADdYwzip_r039H67anjrRgLXNQJQlj5HlMOHISz18ySc' onClick={this.handleCabSelect.bind(this,"Budget Cars")}/>
        <Card.Content>
            <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Budget Cars</span>
        </Card.Content>
      </Card>
      </div>
      <div>
        <Card style={{width:'85%',boxShadow:'none',border:'none'}} >
          <Image  src='https://media.staticontent.com/media/pictures/a8199306-9c4a-4432-8983-c7415f0eb7da' onClick={this.handleCabSelect.bind(this,"Thrifty Cars")}/>
          <Card.Content>
              <span className="subheaders" style={{color:"black",fontSize:"15px"}}>Thrifty Cars</span>
          </Card.Content>
        </Card>
      </div>
    </Slider>
    </div>
  );
}

}
