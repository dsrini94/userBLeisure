import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './client/views/loginPage.jsx';
import RegisterPage from './client/views/register.jsx';
import FlightSearchResultPage from './client/views/flightSearchResultPage.jsx';
import Homepage from './client/views/homepage.jsx';
import Homepage1 from './client/views/homepage1.jsx';
import SearchFlight from './client/views/searchFlight.jsx';
import SelectedFlight from './client/views/selectedFlight.jsx';
import RoundselectedFlight from './client/views/roundSelectedFlight.jsx';
import mainSummary from './client/views/mainSummary.jsx';
import carBooking from './client/views/carBooking.jsx';
import hotelBooking from './client/views/hotelBooking.jsx';
import Suggestion from './client/views/suggestion.jsx';
import ShoppingPage from './client/views/shoppingPage.jsx';
import ViewProduct from './client/views/viewProduct.jsx';
import DigitalKey from './client/views/digitalKey.jsx';
import SelectedSuggestedFlightComponent from './client/components/selectedSuggestedFlightComponent.jsx';
import RoundTripSearchResult from './client/views/roundTripSearchResult.jsx';
import MapOverview from './client/views/viewMap.jsx'
import Webcheckin from './client/components/webcheckin.jsx';
import Luggage from './client/components/luggage.jsx';
import Chat from './client/views/chatScreen.jsx';
import Wallet from './client/views/wallet.jsx';
import HotelSummaryDetails from './client/views/hotelSummaryDetails.jsx';
import CabSummaryDetails from './client/views/cabSummaryDetails.jsx';
import Hotel from './client/views/Hotel.jsx';
import NetFlix from './client/views/netflix.jsx';
import UploadDocs from './client/views/uploadDocuments.jsx';
import DestMap from './client/views/destMap.jsx';
import MessageTabs from './client/components/updatedLuggage.jsx';
import NewLogin from './client/views/newLogin.jsx';
import Test from './client/views/test.jsx';
import NewShoppingPage from './client/views/newShoppingPage.jsx';
import OnwardTripSearchResult from './client/views/onwardTripSearchResult.jsx';



import {HashRouter, Route, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './redux/reducers/combineReducers.js';

const store = createStore(allReducers);


ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/search' component={SearchFlight} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/homepage1/:hrs' component={Homepage1} />
        <Route exact path='/flightsearchresult/:onwardDate' component={FlightSearchResultPage} />
        <Route exact path='/roundTripSearchResult/:onwardDate' component={RoundTripSearchResult} />
        <Route exact path='/summaryDetails/:way/:from/:to' component={mainSummary} />
        <Route exact path='/carBooking' component={carBooking} />
        <Route exact path='/hotelBooking' component={hotelBooking} />
        <Route exact path='/suggestion' component={Suggestion} />
        <Route exact path='/selectedFlight/:way/:time' component={SelectedFlight} />
        <Route exact path='/shopping' component={ShoppingPage} />
        <Route exact path='/view' component={ViewProduct} />
        <Route exact path='/digitalKey' component={DigitalKey} />
        <Route exact path='/SelectedSuggestedFlightComponent/:type/:way/:from/:to/:flag' component={SelectedSuggestedFlightComponent} />
        <Route exact path='/round/:time1/:time2' component={RoundTripSearchResult} />
        <Route exact path='/MapOverview' component={MapOverview} />
        <Route exact path='/webcheckin' component={Webcheckin} />
        <Route exact path='/luggage' component={Luggage} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/hotelSummaryDetails/:hotelname' component={HotelSummaryDetails} />
        <Route exact path='/cabSummaryDetails/:cabname' component={CabSummaryDetails} />
        <Route exact path='/wallet' component={Wallet} />
        <Route exact path='/hotel' component={Hotel} />
        <Route exact path='/netflix' component={NetFlix} />
        <Route exact path='/upload' component={UploadDocs} />
        <Route exact path='/orgMap' component={DestMap} />
        <Route exact path='/new' component={NewLogin} />
        <Route exact path='/test' component={Test} />
        <Route exact path='/newShopping' component={NewShoppingPage} />
        <Route exact path='/roundselectedFlight/:way' component={RoundselectedFlight} />
        <Route exact path='/onwardTripSearchResult/:onwardDate1/:onwardDate2' component={OnwardTripSearchResult} />



        </div>
    </HashRouter>
    </Provider>
    , document.getElementById('app'));
