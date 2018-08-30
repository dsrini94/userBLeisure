import React from 'react';
import HotelSlider from './hotelSlider.jsx'
import CabSlider from './cabSlider.jsx'
import Appbar from './../components/appbar.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  Button,
  Icon,
  Header,
  Dropdown,
  Card,
  Grid,
  Divider,
  Segment,
  Radio,
  Modal,
  Input,
  Image,
  Checkbox,
  Sidebar,
  Menu,
  List,
  Form
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

const seatOptions = [
  {
    key: 'window',
    text: 'Window',
    value: 'Window'
  }, {
    key: 'mid',
    text: 'Middle',
    value: 'Middle'
  }, {
    key: 'aisle',
    text: 'Aisle',
    value: 'Aisle'
  }
]

const mealOptions = [
  {
    key: 'hvgml`',
    text: 'Hindu Veg Meal',
    value: 'Hindu Veg Meal'
  }, {
    key: 'hnvgml',
    text: 'Hindu Non Veg Meal',
    value: 'Hindu Non Veg Meal'
  }, {
    key: 'avgml',
    text: 'Asian Veg Meal',
    value: 'Asian Veg Meal'
  }
]
const monthOptions = [
  {
    key: '01`',
    text: '01',
    value: '01'
  }, {
    key: '02`',
    text: '02',
    value: '02'
  }, {
    key: '03`',
    text: '03',
    value: '03'
  }, {
    key: '04`',
    text: '04',
    value: '04'
  }, {
    key: '05`',
    text: '05',
    value: '05'
  }, {
    key: '06`',
    text: '06',
    value: '06'
  }, {
    key: '07`',
    text: '07',
    value: '07'
  }, {
    key: '08`',
    text: '08',
    value: '08'
  }, {
    key: '09`',
    text: '09',
    value: '09'
  }, {
    key: '10`',
    text: '10',
    value: '10'
  }, {
    key: '11`',
    text: '11',
    value: '11'
  }, {
    key: '12`',
    text: '12',
    value: '12'
  }
];

const yearOptions = [
  {
    key: '17`',
    text: '17',
    value: '17'
  }, {
    key: '18`',
    text: '18',
    value: '18'
  }, {
    key: '19`',
    text: '19',
    value: '19'
  }, {
    key: '20`',
    text: '20',
    value: '20'
  }, {
    key: '21`',
    text: '21',
    value: '21'
  }, {
    key: '22`',
    text: '22',
    value: '22'
  }, {
    key: '23`',
    text: '23',
    value: '23'
  }, {
    key: '24`',
    text: '24',
    value: '24'
  }, {
    key: '25`',
    text: '25',
    value: '25'
  }, {
    key: '26`',
    text: '26',
    value: '26'
  }, {
    key: '27`',
    text: '27',
    value: '27'
  }, {
    key: '28`',
    text: '28',
    value: '28'
  }
];
var datevalue = '';

const paymentOptions = [
  { key: 'Office', text: 'Use Office card ending with 4576', value: 'Use Office card ending with 4576' },
  { key: 'personal', text: 'Use Personal card ending with 5647', value: 'Use Personal card ending with 5647' },
]

class SelectedFlightComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      hotelCheck: false,
      cabCheck: false,
      hotelvalue: 'Hotel Continental',
      temp: 'Hyatt Hotel',
      hotelComponent: '',
      cabComponent: '',
      datevalue: '',
      cab: 'Hertz Cab',
      alternatePayment: '',
      alternatePaymentModal:false,
      disableState:true,
      total:650,
      date2:new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toString(),
      date3:'1515628800000',
      date4:'1515542400000',
      hotel:0,
      cabAmount:0
    }
    this.handleAlternatePayment = this.handleAlternatePayment.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.from == 'DFW') {

    } else if (this.props.match.params.from == 'IAH' && this.props.match.params.to == 'SEA') {

    } else if (this.props.match.params.from == 'NYC') {

    } else if (this.props.match.params.from == 'PHX') {

    } else if (this.props.match.params.from == 'ATL') {

    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'ORD') {

    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'SEA') {

    }
    else if (this.props.match.params.from == 'LAS') {

    }
    else if (this.props.match.params.from == 'MIA') {

    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'BOS') {

    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'MIA') {

    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'BUF') {

    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'WYS') {

    }
    else if (this.props.match.params.from == 'SLC' && this.props.match.params.to == 'IAG') {

    }
    if(this.state.hotelCheck)
    {
      this.setState({hotelCheck: true, hotelComponent: (<div>
        <br/>
        <Input fluid placeholder='check-in' defaultValue='12:00 pm, 20th Dec 2017'/>
        <br/>
        <Input fluid placeholder='check-out' defaultValue='12:00 pm, 22nd Dec 2017'/>
        <br/>
        <HotelSlider cardClick={this.cardClick.bind(this)}/>
        <br/>
        <List.Item as={Link} to="/hotel" inverted>Pre arrival checklist</List.Item>
      </div>)})
    }else {
        this.setState({hotelCheck: false, hotelComponent: ""});
    }


    var temp1,
      temp = (<div><span className="subheaders">Hyatt Hotel</span><br/></div>);
    this.setState({temp: temp});
    temp1 = (<div><span className="subheaders">Hertz Cars</span><br/></div>);
    this.setState({cab: temp1});
  }


  handleHotelCheckBox() {
    let hotelCheckInValue='',
        hotelCheckOutValue='';

    if (this.props.match.params.from == 'DFW') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString();
    } else if (this.props.match.params.from == 'IAH' && this.props.match.params.to == 'SEA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString();
    } else if (this.props.match.params.from == 'NYC') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString();
    } else if (this.props.match.params.from == 'PHX') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 41)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 43)).toDateString();
    } else if (this.props.match.params.from == 'ATL') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString();
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'ORD') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 48)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 50)).toDateString();
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'SEA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString();
    }
    else if (this.props.match.params.from == 'LAS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 81)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 83)).toDateString();
    }
    else if (this.props.match.params.from == 'MIA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 172)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 174)).toDateString();
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'BOS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 263)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 265)).toDateString();
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'MIA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 354)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 356)).toDateString();
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'BUF') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 144)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 146)).toDateString();
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'WYS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 207)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 209)).toDateString();
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'DEN') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString();
    }
    else if (this.props.match.params.from == 'SLC' && this.props.match.params.to == 'IAG') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 326)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 328)).toDateString();
    }
    if (this.state.hotelCheck == true) {
      this.setState({hotelCheck: false, hotelComponent: ""});
    } else {
      this.setState({hotelCheck: true, hotelComponent: (<div>
        <br/>
        <Input fluid placeholder='check-in' defaultValue={'12:00 pm, '+hotelCheckInValue} style={{opacity:"0.6"}}/>
        <br/>
        <Input fluid placeholder='check-out' defaultValue={'12:00 pm, '+hotelCheckOutValue} style={{opacity:"0.6"}}/>
        <br/>
        <HotelSlider cardClick={this.cardClick.bind(this)}/>
        <List.Item as={Link} to="/hotel" style={{textDecoration:"underline"}}>Pre arrival checklist?</List.Item>
      </div>)})
    }
  }

  cardClick(p) {
    var temp = (<span className="subheaders">{p}</span>)
    this.setState({temp: temp,hotel:0});

  }

  handleCabSelect(p) {
    var temp = (<span className="subheaders">{p}</span>)
    this.setState({cab: temp,cabAmount:0});
  }

  handleCabCheckBox() {
    let hotelCheckInValue='',
        hotelCheckOutValue='';

    if (this.props.match.params.from == 'DFW') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString();
    } else if (this.props.match.params.from == 'IAH' && this.props.match.params.to == 'SEA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString();
    } else if (this.props.match.params.from == 'NYC') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 57)).toDateString();
    } else if (this.props.match.params.from == 'PHX') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 41)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 43)).toDateString();
    } else if (this.props.match.params.from == 'ATL') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString();
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'ORD') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 48)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 50)).toDateString();
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'SEA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 71)).toDateString();
    }
    else if (this.props.match.params.from == 'LAS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 81)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 83)).toDateString();
    }
    else if (this.props.match.params.from == 'MIA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 172)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 174)).toDateString();
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'BOS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 263)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 265)).toDateString();
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'MIA') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 354)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 356)).toDateString();
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'BUF') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 144)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 146)).toDateString();
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'WYS') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 207)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 209)).toDateString();
    }
      else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'DEN') {
        hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toDateString();
        hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 29)).toDateString();
      }
    else if (this.props.match.params.from == 'SLC' && this.props.match.params.to == 'IAG') {
      hotelCheckInValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 326)).toDateString();
      hotelCheckOutValue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 328)).toDateString();
    }
    var that = this;
    if (this.state.cabCheck == true) {
      this.setState({cabCheck: false, cabComponent: ""});
    } else {
      this.setState({cabCheck: true, cabComponent: (<div>
        <br/>
        <Input fluid placeholder='Pick-up date' defaultValue={'11:00 pm, ' + hotelCheckInValue} style={{opacity:"0.6"}}/>
        <br/>
        <Input fluid placeholder='Drop date' defaultValue={'11:00 pm, '+ hotelCheckOutValue} style={{opacity:"0.6"}}/>
        <br/>
        <CabSlider handleCabSelect={that.handleCabSelect.bind(that)}/>
      </div>)})
    }
  }

  handleAlternatePayment() {
      if(this.state.alternatePaymentModal)
        this.setState({alternatePaymentModal:false})
      else
      this.setState({alternatePaymentModal:true})

    }
  handleSiderbarVisiblity() {
    if (this.state.sidebarVisiblity) {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'content'});
    } else {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'remove'});
    }
  }
  dateChange(e){
    // console.log("ee",new Date(e.target.value).getTime().toString());
    this.setState({date2:new Date(e.target.value).toString(),disableState:false,date3:new Date(e.target.value).getTime().toString()});
  }
  dateChange1(e){
    this.setState({date4:new Date(e.target.value).getTime().toString()});
  }
  render() {
    var iconvalue = '',
      fromName = "",
      toName = "",
      flightNo = "";
    if (this.props.match.params.way == 'RoundTrip') {
      // console.log("round trip");
      iconvalue = 'resize horizontal'
    } else if (this.props.match.params.way == 'OneWay') {
      // console.log("one way");
      iconvalue = 'long arrow right'
    }
    var datevalue = '';
    var cardInfo='Use Office card ending with 4576';

    if (this.props.match.params.from == 'DFW') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toISOString().substring(0, 10);
      flightNo="XX103";
      fromName = "Dallas";
      toName = "Phoenix";
    } else if (this.props.match.params.from == 'IAH' && this.props.match.params.to == 'SEA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toISOString().substring(0, 10);
      fromName = "George Bush";
      toName = "Tacoma";
      flightNo = "XX008";
    } else if (this.props.match.params.from == 'NYC') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 55)).toISOString().substring(0, 10);
      fromName = "New York City";
      toName = "Atlanta";
      flightNo = "XX011";
    } else if (this.props.match.params.from == 'PHX') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 41)).toISOString().substring(0, 10);
      fromName = "Phoenix";
      toName = "Dallas Fort Worth";
      flightNo = "XX010";
    } else if (this.props.match.params.from == 'ATL') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toISOString().substring(0, 10);
      fromName = "Atlanta";
      toName = "New York City";
      flightNo = "XX012";
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'ORD') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 48)).toISOString().substring(0, 10);
      fromName = "San Francisco";
      toName = "O'Hare";
      flightNo = "XX104";
    }
    else if (this.props.match.params.from == 'SFO' && this.props.match.params.to == 'SEA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 69)).toISOString().substring(0, 10);
      fromName = "San Francisco";
      toName = "Tacoma";
      flightNo = "XX105";
    }
    else if (this.props.match.params.from == 'LAS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 81)).toISOString().substring(0, 10);
      fromName = "McCarran";
      toName = "Miami";
      flightNo = "XX203";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'MIA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 172)).toISOString().substring(0, 10);
      fromName = "Miami";
      toName = "Logan";
      flightNo = "XX210";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'BOS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 263)).toISOString().substring(0, 10);
      fromName = "Atlantic City";
      toName = "Logan";
      flightNo = "XX211";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'ACY' && this.props.match.params.to == 'MIA') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 354)).toISOString().substring(0, 10);
      fromName = "Atlantic City";
      toName = "Miami";
      flightNo = "XX212";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'BUF') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 144)).toISOString().substring(0, 10);
      fromName = "Los Angeles";
      toName = "Buffalo Niagara";
      flightNo = "XX209";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'WYS') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 207)).toISOString().substring(0, 10);
      fromName = "Los Angeles";
      toName = "Yellowstone";
      flightNo = "XX207";
      cardInfo='Use Personel card ending with 5647';
    }
    else if (this.props.match.params.from == 'LAX' && this.props.match.params.to == 'DEN') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 27)).toISOString().substring(0, 10);
      fromName = "Los Angeles";
      toName = "Denver";
      flightNo = "XX402";
    }
    else if (this.props.match.params.from == 'SLC' && this.props.match.params.to == 'IAG') {
      datevalue = new Date(new Date().setUTCDate(new Date(1513014583192).getDate() + 326)).toISOString().substring(0, 10);
      fromName = "Salt Lake City";
      toName = "Niagara Falls";
      flightNo = "XX216";
      cardInfo='Use Personel card ending with 5647';
    }
    // console.log("this.state.datevalue", new Date(new Date().setUTCDate(new Date(datevalue).getDate() + 2)).toISOString().substring(0, 10));
    var buttonName='';
    if(this.props.match.params.flag == '0'){
      buttonName='Make Payment';
    }
    else if(this.props.match.params.flag == '1'){
      buttonName='Make Payment';
    }
    let qq='';
    let totallink='';
    if(this.props.match.params.way =='RoundTrip'){
    qq=(<Grid.Row style={{
        marginTop: "-15px"
      }}>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={10}>
        <Form >
        <Form.Field>
          <label className="subheaders" style={{color:"white"}}>Return Date</label>
          <input placeholder='Date' type="date" style={{opacity:"0.6"}} onChange={this.dateChange1.bind(this)} defaultValue={new Date(new Date(datevalue).setUTCDate(new Date(datevalue).getDate() + 2)).toISOString().substring(0, 10)}/>
        </Form.Field>
      </Form>
      </Grid.Column>
      <Grid.Column width={4}>
      {/* <Link to={`/flightsearchresult/${this.state.date2}`}><Icon  name='pencil' disabled={this.state.disableState} size='large' style={{marginTop:'30px',float:'right',color:'#A19FA4'}}/></Link> */}
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
    </Grid.Row>);
    totallink=`/onwardTripSearchResult/${this.state.date3}/${this.state.date4}`;
    }

    else{
      totallink=`/flightsearchresult/${this.state.date2}`;
    }
    var cc='';
    if(this.props.match.params.way=='OneWay'){
      cc=(
        <Grid style={{marginTop:'-22px'}}>
          <Grid.Row style={{marginTop:'-3px'}}><Grid.Column><span className='subheaders' style={{margin:"1px",fontSize:"10px"}}>{flightNo}</span></Grid.Column></Grid.Row>
          <Grid.Row style={{marginTop:'-32px'}}><Grid.Column><Icon name='long right arrow' inverted size="large"/></Grid.Column></Grid.Row>
          <Grid.Row style={{marginTop:'-33px'}}><Grid.Column><span className='subheaders'  style={{fontSize:"10px"}}>Non stop</span></Grid.Column></Grid.Row>
        </Grid>)
    }
    else{
      cc=(<Grid style={{marginTop:'-22px'}}>
        <Grid.Row style={{marginTop:'-3px'}}><Grid.Column><span className='subheaders' style={{margin:"1px",fontSize:"10px"}}>XX301</span></Grid.Column></Grid.Row>
        <Grid.Row style={{marginTop:'-35px'}}><Grid.Column><Icon name='long right arrow'  inverted size="large"/></Grid.Column></Grid.Row>
        <Grid.Row style={{marginTop:'-38px'}}><Grid.Column><Icon name='long left arrow'  inverted size="large"/></Grid.Column></Grid.Row>
        <Grid.Row style={{marginTop:'-35px'}}><Grid.Column><span className='subheaders'  style={{fontSize:"10px",margin:"-1px"}}>XX402</span></Grid.Column></Grid.Row>
      </Grid>)
    }
    return (<div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.props.notifications.toggle} icon='labeled' vertical style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <div className="imgHeight vhsidebar" style={{backgroundImage:"url("+this.props.notifications.backgroundImage+")"}}>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
            <div style={{
                marginTop:'10px'
              }}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <center>
                      <span className='subheaders'>{this.props.match.params.from}</span><br/>
                      <span className='subheaders' style={{
                          margin: "5px",fontSize:"10px"
                        }}>{fromName}</span>
                    </center>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <center>
                    {cc}
                    </center>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <center>
                      <span className='subheaders'>{this.props.match.params.to}</span><br/>
                      <span className='subheaders' style={{margin: "5px",fontSize:"10px"}}>{toName}</span>
                    </center>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid style={{marginTop:"0px"}}>
                <Grid.Row>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    <Dropdown fluid placeholder='Seat Prefrences' className='drop1' defaultValue='Window' selection options={seatOptions}/>
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>

                <Grid.Row style={{
                    marginTop: "-15px"
                  }}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    <Dropdown placeholder='Meal Prefrences' className='drop1' defaultValue='Asian Veg Meal' fluid selection options={mealOptions} />
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>

                <Grid.Row style={{
                    marginTop: "-15px"
                  }}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={10}>
                    <Form >
                    <Form.Field>
                      <label className="subheaders" style={{color:"white"}}>Onward Date</label>
                      <input placeholder='Date' type="date" style={{opacity:"0.6"}} onChange={this.dateChange.bind(this)} defaultValue={datevalue}/>
                    </Form.Field>
                  </Form>
                  </Grid.Column>
                  <Grid.Column width={4}>
                  <Button as={Link} to={totallink} disabled={this.state.disableState} icon style={{marginTop:'24px',float:'right',color:'white'}} inverted><Icon  name='pencil'   /></Button>
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
                {qq}
                <Grid.Row style={{
                    marginTop: "-15px"
                  }}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    {this.state.temp}
                    <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                      <Checkbox style={{display:"inline"}} onChange={this.handleHotelCheckBox.bind(this)}/>
                      <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Modify Hotel</label>
                    </Form.Field>
                    {this.state.hotelComponent}
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>

                <Grid.Row style={{
                    marginTop: "-15px"
                  }}>
                  <Grid.Column width={1}></Grid.Column>
                  <Grid.Column width={14}>
                    {this.state.cab}
                    <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                      <Checkbox style={{display:"inline"}} onChange={this.handleCabCheckBox.bind(this)}/>
                      <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Modify Car</label>
                    </Form.Field>
                    {this.state.cabComponent}
                  </Grid.Column>
                  <Grid.Column width={1}></Grid.Column>
                </Grid.Row>



                <Grid.Row style={{
                    marginTop: "-15px"
                  }}>
                  <Grid.Column width={1}/>
                  <Grid.Column width={14}>

                      <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                        <Checkbox style={{display:"inline"}} />
                        <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Travel Insurance</label>
                      </Form.Field>
                      <br/>
                  <Dropdown fluid placeholder='Select Payment Cards' className='drop1' defaultValue={cardInfo} selection options={paymentOptions} style={{marginTop:"5px"}}/>
                  {/* <Input icon='credit card alternative' iconPosition='left' placeholder='CVV'  style={{opacity:"0.6",marginTop:"10px"}}/> */}
                  <Form.Field style={{opacity:"0.6",marginTop:"25px"}}>
                    <Radio style={{display:"inline"}} onChange={()=>{this.setState({alternatePaymentModal:true})}}/>
                    <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Make Alternate Payment</label>
                  </Form.Field>
                  <br/>
                  <center><span className="subheaders">Total  ${this.state.total+this.state.cabAmount+this.state.hotel}</span></center>
                  <br/>
                  <center><Button as={Link} to={`/summaryDetails/${'OneWay'}/${this.props.match.params.from}/${this.props.match.params.to}`} inverted><Icon name="credit card alternative"/>{buttonName}</Button></center>
                  <br/>
                  <br/>
                  <Modal open={this.state.alternatePaymentModal} basic size='small'>
                    <Header icon='credit card alternative' content='Alternate Payment' />
                      <Modal.Content>
                      <Form.Field>
                        <Radio style={{display:"inline"}} name='radioGroup' value='this'
                          onChange={(e, { value }) => this.setState({ value })}
                          checked={this.state.value === 'this'}/>
                        <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Use another card</label>
                      </Form.Field>
                      <Form.Field>
                        <Radio style={{display:"block",marginTop:'10px'}} name='radioGroup' value='that'
                          onChange={(e, { value }) => this.setState({ value })}
                          checked={this.state.value === 'that'}/>
                        <label style={{display:"block",marginLeft:"30px",color:"white",marginTop:"-15px"}}>Use loyalty points</label>
                      </Form.Field>
                      </Modal.Content>
                    <Modal.Actions>
                      <Button basic color='red' inverted onClick={()=>{this.setState({alternatePaymentModal:false})}}>
                        <Icon name='remove' /> Close
                      </Button>
                        <Button color='green' inverted onClick={()=>{this.setState({alternatePaymentModal:false})}}>
                          <Icon name='credit card alternative' /> Pay
                        </Button>
                    </Modal.Actions>
                    </Modal>
                  </Grid.Column>
                  <Grid.Column width={1}/>
                </Grid.Row>


              </Grid>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}

function mapStateToProps(state) {
  return {notifications: state.timeTravel}
}

export default connect(mapStateToProps, null)(SelectedFlightComponent);
