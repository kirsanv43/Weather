import { combineReducers } from 'redux'
import {ADD_CITY} from '../actions/types'
import {  routerStateReducer} from 'redux-router';


function cities(state = [], action){
  switch (action.type) {
    case ADD_CITY:
      return [...state, {name:action.name,temp:action.temp}]
      break;
    default:
      return state;
  }
}


export default combineReducers({
  cities,
  routing: routerStateReducer
});
