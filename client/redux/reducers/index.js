import cities from './cities.js'
import select from './select.js'
import {
  combineReducers
} from 'redux'
import {
  routerStateReducer
} from 'redux-router';

export default combineReducers({
  cities,
  select,
  routing: routerStateReducer
});
