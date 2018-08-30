import TimeTravel from './timeTravelReducer.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    timeTravel:TimeTravel
});

export default allReducers;
