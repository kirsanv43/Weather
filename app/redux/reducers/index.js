import { combineReducers } from 'redux'
import {ADD_CITY} from '../actions/types'
import {  routerStateReducer} from 'redux-router';
import * as db from '../api/db'

function cities(state = [], action){
  switch (action.type) {
    case ADD_CITY:
      return [...state, {id:action.id,name:action.name,temp:action.temp}]
      break;
    default:
      return state;
  }
}


export default combineReducers({
  cities,
  routing: routerStateReducer
});
