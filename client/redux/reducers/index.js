import cities from './cities.js';
import select from './select.js';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

export default combineReducers({
  cities,
  select,
  routing: routerReducer
});
