module.exports = (state = {
  count: 0,
  data: [],
  toggle:false,
  icon:"content",
  room:false,
  burger:false,
  towel:false,
  gift:false,
  backgroundImage:'./../../images/darkbg.jpg',
  travelData:[
  {"travelType":"Business","tt":"3 Hrs","Gate":"13","Terminal":"2","Seat":"3D","sourceName":"Dallas Fort Worth International Airport","source":"DFW","destination":"PHX","destinationName":"Phoenix International Airport","flightNo":"XX103","image":"./../../images/phx50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+27)).toDateString()},
  {"travelType":"Business","tt":"3 Hrs","Gate":"8","Terminal":"7","Seat":"1A","sourceName":"Phoenix International Airport","source":"PHX","destination":"DFW","destinationName":"Dallas Fort Worth International Airport","flightNo":"XX010","image":"./../../images/dallas40croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+41)).toDateString()},
  {"travelType":"Business","tt":"3 Hrs","Gate":"5","Terminal":"14","Seat":"9E","sourceName":"New York City International Airport","source":"NYC","destination":"ATL","destinationName":"Atlanta International Airport","flightNo":"XX011","image":"./../../images/atl50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+55)).toDateString()},
  {"travelType":"Business","tt":"3 Hrs","Gate":"2","Terminal":"25","Seat":"5F","sourceName":"Atlanta International Airport","source":"ATL","destination":"NYC","destinationName":"New York City International Airport","flightNo":"XX012","image":"./../../images/nyc50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+69)).toDateString()}
  ],

suggestedData:[
{"travelType":"Business","tt":"4.5 Hrs","sourceName":"San Francisco International Airport","source":"SFO","destination":"ORD","destinationName":"O'Hare International Airport","flightNo":"XX104","image":"./../../images/ord50.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+48)).toDateString(),"way":"RoundTrip","class":"Business","time1":"20:00-21:00","time2":"17:00-18:00"},
{"travelType":"Business","tt":"5 Hrs","sourceName":"George Bush Intercontinental Airport","source":"IAH","destination":"SEA","destinationName":"Tacoma International Airport","flightNo":"XX008","image":"./../../images/seatle50croppeddarkenned.png","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+55)).toDateString(),"way":"RoundTrip","class":"Economy","time1":"16:00-17:00","time2":"19:00-20:00"},
{"travelType":"Business","tt":"2.5 Hrs","sourceName":"San Francisco International Airport","source":"SFO","destination":"SEA","destinationName":"Tacoma International Airport","flightNo":"XX105","image":"./../../images/sfo50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+69)).toDateString(),"way":"RoundTrip","class":"Business","time1":"12:00-13:00","time2":"15:00-16:00"}]
}, action) => {
  switch (action.type) {
  case "2Hrs":
    return {
      data: [{
        "link": "",
        "textData": "Boarding has started",
        "icon": "building",
        "disabled": false,
        "key":"Boarding"
      },
        {
          "link": "/hotel",
          "textData": "Hotel Pre-arrival Requests",
          "icon": "building",
          "disabled": false,
          "key":"Pre-arrival Requests"
        }
      ],
      count: 2,
      toggle:!state.toggle,
      icon:"content",
      room:state.room,
      burger:state.burger,
      towel:state.towel,
      gift:state.gift,
      travelData:state.travelData,
      suggestedData:state.suggestedData,
      backgroundImage:'../../images/airport.jpg'
    }
    break;
  case "3Hrs":
    return {
      data: [{
        "link": "",
        "textData": "Drop your bags",
        "icon": "cart",
        "disabled": false,
        "key":"information"
      },
      {
        "link": "",
        "textData": "Take pictures of bag",
        "icon": "camera",
        "disabled": false,
        "key":"photoClick"
      },
      {
        "link": "/newShopping",
        "textData": "It's time for shopping",
        "icon": "cart",
        "disabled": false,
        "key":"shopping"
      },
        {
          "link": "/hotel",
          "textData": "Hotel Pre-arrival Requests",
          "icon": "building",
          "disabled": false,
          "key":"Pre-arrival Requests"
        }
      ],
      count: 4,
      toggle:!state.toggle,
      icon:"content",
      room:state.room,
      burger:state.burger,
      towel:state.towel,
      gift:state.gift,
      travelData:state.travelData,
      suggestedData:state.suggestedData,
      backgroundImage:'../../images/shopping.jpg'
    }
    break;
  case "4Hrs":
    return {
      data: [
        {
          "link": "",
          "textData": "Flight delayed by 4 Hrs",
          "icon": "plane",
          "disabled": false,
          "key":"Appologies"
        },
        {
          "link": "",
          "textData": "Hotel and car were informed about the delay",
          "icon": "arrow up",
          "disabled": false,
          "key":"delayal"
        },
        {
          "link": "/hotel",
          "textData": "Hotel Pre-arrival Requests",
          "icon": "building",
          "disabled": false,
          "key":"Pre-arrival Requests"
        }
      ],
      count: 3,
      toggle:!state.toggle,
      icon:"content",
      room:state.room,
      burger:state.burger,
      towel:state.towel,
      gift:state.gift,
      travelData:state.travelData,
      suggestedData:state.suggestedData,
      backgroundImage:'../../images/travelling.jpg'
    }
    break;
    case "5Hrs":
      return {
        data: [
          {
            "link": "",
            "textData": "5 Hrs to go for your flight",
            "icon": "clock",
            "disabled": false,
            "key":"time reminder"
          },
          {
            "link": "",
            "textData": "The cab has arrived",
            "icon": "taxi",
            "disabled": false,
            "key":"cab"
          },
          {
            "link": "/hotel",
            "textData": "Hotel Pre-arrival Requests",
            "icon": "building",
            "disabled": false,
            "key":"Pre-arrival Requests"
          }
        ],
        count: 3,
        toggle:!state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/clock.jpg',
      }
      break;
    case "48Hrs":
      return {
        data: [
          {
            "link": "/webcheckin",
            "textData": "Its time to E-checkin",
            "icon": "user",
            "disabled": false
          }, {
            "link": "/shopping",
            "textData": "Do you want to prepare a shopping list?",
            "icon": "cart",
            "disabled": false
          },
          {
            "link": "/hotel",
            "textData": "Hotel Pre-Arrival Requests",
            "icon": "building",
            "disabled": false,
            "key":"Pre-arrival Requests"
          }
        ],
        count: 3,
        toggle:!state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/echeckin1.jpg',
      }
      break;
    case "inFlight":
      return {
        data: [
        {
          "link": "",
          "textData": "Luggage Loaded",
          "icon": "suitcase",
          "disabled": false,
          "key":"loaded"
        },
        {
          "link": "/netflix",
          "textData": "Enjoy Movies with Netflix",
          "icon": "video camera",
          "disabled": false,
          "key":"Pre-arrival Requests"
        },
        {
          "link": "",
          "textData": "Your in-flight requests are ready",
          "icon": "ticket",
          "disabled": false,
          "key":"Your in-flight requests are ready"
        }
        ],
        count: 3,
        toggle:!state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/inflight.jpg',
      }
      break;
    case "atAirport":
      return {
        data: [

          {
            "link": "/hotel",
            "textData": "Hotel Pre-arrival Requests",
            "icon": "building",
            "disabled": false,
            "key":"Pre-arrival Requests"
          }
        ],
        count: 1,
        toggle:!state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:state.backgroundImage,
      }
      break;
    case "desAirport":
      return {
        data: [
        {
          "link": "",
          "textData": "Collect your bags at carousel 3",
          "icon": "suitcase",
          "disabled": false,
          "key":"luggage collect"
        },
        {
          "link": "",
          "textData": "Get bags dropped to your Car",
          "icon": "shopping bag",
          "disabled": false,
          "key":"Get bags dropped to your Car"
        },
          {
            "link": "/MapOverview",
            "textData": "Your car is ready at bay 5. Navigate?",
            "icon": "taxi",
            "disabled": false,
            "key":"cab"
          },

          {
            "link": "/hotel",
            "textData": "Hotel Pre-arrival Requests",
            "icon": "building",
            "disabled": false,
            "key":"Pre-arrival Requests"
          }
        ],
        count: 4,
        toggle:!state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/airport1.jpg',
      }
      break;
    case "atCab":
      return {
        data: [
          {
            "link": "/upload",
            "textData": "E-Checkin to the Hotel?",
            "icon": "key",
            "disabled": false,
            "key":"eCheckin"
          },
          {
            "link": "/hotel",
            "textData": "Hotel Pre-arrival Requests",
            "icon": "building",
            "disabled": false,
            "key":"Pre-arrival Requests"
          }
        ],
        count: 2,
        toggle:!state.toggle,
        icon:"content",
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/atcar.jpg',
      }
      break;
    case "atHotel":
      return {
        data: [{
          "link": "",
          "textData": "Digital Key added to your Wallet",
          "icon": "key",
          "disabled": false,
          "key":"digiKey added"
        },
          {
            "link": "/digitalKey",
            "textData": "Unlock your room with digital key",
            "icon": "key",
            "disabled": false,
            "key":"digitalKey"
          }
        ],
        count: 2,
        toggle:!state.toggle,
        room:state.room,
        icon:"content",
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:'../../images/iStock-165839065.jpg',
      }
      break;
    case "count":
      return {
        data: state.data.map((item, i) => {
          if (i == action.index) {
            item.disabled = true;
            return item
          } else
            return item
        }),
        count: state.count - 1,
        toggle:state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:state.travelData,
        suggestedData:state.suggestedData,
        backgroundImage:state.backgroundImage,
      }
      break;
    case "toggle":
      var temp;
      if(state.toggle == false)
        temp = "close"
      else
      temp = "content"
      return {
          data:state.data,
          count:state.count,
          toggle:!state.toggle,
          icon:temp,
          room:state.room,
          burger:state.burger,
          towel:state.towel,
          gift:state.gift,
          travelData:state.travelData,
          suggestedData:state.suggestedData,
          backgroundImage:state.backgroundImage,
      }
      break;
    case "checkedItem":
      if(action.index==1) state.room=!state.room
      else if(action.index==2) state.burger=!state.burger
      else state.towel=!state.towel
      return {
          data:state.data,
          count:state.count,
          toggle:state.toggle,
          icon:state.icon,
          room:state.room,
          burger:state.burger,
          towel:state.towel,
          gift:state.gift,
          travelData:state.travelData,
          suggestedData:state.suggestedData,
          backgroundImage:state.backgroundImage,
      }
      break;
    case "gift":
      return {
          data:state.data,
          count:state.count,
          toggle:state.toggle,
          icon:state.icon,
          room:state.room,
          burger:state.burger,
          towel:state.towel,
          gift:!state.gift,
          travelData:state.travelData,
          suggestedData:state.suggestedData,
          backgroundImage:state.backgroundImage,
      }
      break;
    case "travel":
      var sugesstedTemp,temp1,bg;
      if(action.travelType == "Business")
      {
        bg="./../../images/darkbg.jpg";

        temp1 =[
        {"travelType":"Business","tt":"3 Hrs","Gate":"13","Terminal":"2","Seat":"3D","sourceName":"Dallas Fort Worth International Airport","source":"DFW","destination":"PHX","destinationName":"Phoenix International Airport","flightNo":"XX103","image":"./../../images/phx50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+27)).toDateString()},
        {"travelType":"Business","tt":"3 Hrs","Gate":"8","Terminal":"7","Seat":"1A","sourceName":"Phoenix International Airport","source":"PHX","destination":"DFW","destinationName":"Dallas Fort Worth International Airport","flightNo":"XX010","image":"./../../images/dallas40croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+41)).toDateString()},
        {"travelType":"Business","tt":"3 Hrs","Gate":"5","Terminal":"14","Seat":"9E","sourceName":"New York City International Airport","source":"NYC","destination":"ATL","destinationName":"Atlanta International Airport","flightNo":"XX011","image":"./../../images/atl50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+55)).toDateString()},
        {"travelType":"Business","tt":"3 Hrs","Gate":"2","Terminal":"25","Seat":"5F","sourceName":"Atlanta International Airport","source":"ATL","destination":"NYC","destinationName":"New York City International Airport","flightNo":"XX012","image":"./../../images/nyc50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+69)).toDateString()}
        ]

        sugesstedTemp =[
        {"travelType":"Business","tt":"4.5 Hrs","sourceName":"San Francisco International Airport","source":"SFO","destination":"ORD","destinationName":"O'Hare International Airport","flightNo":"XX104","image":"./../../images/ord50.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+48)).toDateString(),"way":"RoundTrip","class":"Business","time1":"20:00-21:00","time2":"17:00-18:00"},
        {"travelType":"Business","tt":"5 Hrs","sourceName":"George Bush Intercontinental Airport","source":"IAH","destination":"SEA","destinationName":"Tacoma International Airport","flightNo":"XX008","image":"./../../images/seatle50croppeddarkenned.png","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+55)).toDateString(),"way":"RoundTrip","class":"Economy","time1":"16:00-17:00","time2":"19:00-20:00"},
        {"travelType":"Business","tt":"2.5 Hrs","sourceName":"San Francisco International Airport","source":"SFO","destination":"SEA","destinationName":"Tacoma International Airport","flightNo":"XX105","image":"./../../images/sfo50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+69)).toDateString(),"way":"RoundTrip","class":"Business","time1":"12:00-13:00","time2":"15:00-16:00"}]
      }
      else {

        bg="./../../images/blurLeisure.jpg";

        temp1 =[
        {"travelType":"Leisure","tt":"5 Hrs","Gate":"13","Terminal":"2","Seat":"3D","sourceName":"McCarran International Airport","source":"LAS","destination":"MIA","destinationName":"Miami International Airport","flightNo":"XX203","image":"./../../images/lasvegas50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+81)).toDateString()},
        {"travelType":"Leisure","tt":"3.5 Hrs","Gate":"8","Terminal":"7","Seat":"1A","sourceName":"Miami International Airport","source":"MIA","destination":"BOS","destinationName":"Logan International Airport","flightNo":"XX210","image":"https://media.licdn.com/media/AAEAAQAAAAAAAAjvAAAAJDUwMTEzOTdkLTE0OTktNDZhMC05MTc4LTllYWYxYTdkNTA0ZQ.png","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+172)).toDateString()},
        {"travelType":"Leisure","tt":"6.5 Hrs","Gate":"5","Terminal":"14","Seat":"9E","sourceName":"Atlantic City International Airport","source":"ACY","destination":"BOS","destinationName":"Logan International Airport","flightNo":"XX211","image":"https://ui6lfrrydp-flywheel.netdna-ssl.com/wp-content/uploads/2017/08/Chicago-300x214.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+263)).toDateString()},
        {"travelType":"Leisure","tt":"3 Hrs","Gate":"2","Terminal":"25","Seat":"5F","sourceName":"Atlantic City International Airport","source":"ACY","destination":"MIA","destinationName":"Miami International Airport","flightNo":"XX212","image":"https://i.pinimg.com/474x/df/4a/63/df4a639cf8debc9fd05a3af053d0163d--purple-sky-bunker.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+354)).toDateString()}
        ]

        sugesstedTemp =[
        {"travelType":"Economy","tt":"4.5 Hrs","sourceName":"Los Angeles International Airport","source":"LAX","destination":"BUF","destinationName":"Buffalo Niagara International Airport","flightNo":"XX209","image":"./../../images/niagra150croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+144)).toDateString(),"way":"RoundTrip","class":"Leisure","time1":"20:00-21:00","time2":"17:00-18:00"},
        {"travelType":"Economy","tt":"4 Hrs","sourceName":"Los Angeles International Airport","source":"LAX","destination":"WYS","destinationName":"Yellowstone Airport","flightNo":"XX207","image":"./../../images/canyon50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+207)).toDateString(),"way":"RoundTrip","class":"Economy","time1":"16:00-17:00","time2":"19:00-20:00"},
        {"travelType":"Economy","tt":"5.5 Hrs","sourceName":"Salt Lake City International Airport","source":"SLC","destination":"IAG","destinationName":"Niagara Falls International Airport","flightNo":"XX216","image":"./../../images/saltlake50croppeddarkenned.jpg","date":new Date(new Date().setUTCDate(new Date(1513014583192).getDate()+326)).toDateString(),"way":"RoundTrip","class":"Business","time1":"12:00-13:00","time2":"15:00-16:00"}]



      }
      return {
        data: state.data,
        count: state.count,
        toggle:state.toggle,
        icon:"content",
        room:state.room,
        burger:state.burger,
        towel:state.towel,
        gift:state.gift,
        travelData:temp1,
        suggestedData:sugesstedTemp,
        backgroundImage:bg,
      }
      break;
  }
  return state
}
