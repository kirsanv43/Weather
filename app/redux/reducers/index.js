import { combineReducers } from 'redux'
import {ADD_CITY} from '../actions/types'
import { syncHistory, routeReducer } from 'react-router-redux'


function cities(state = ['qqq'], action){
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.name]
      break;
    default:
      return state;
  }
}


export default combineReducers({
  cities,
  routing: routeReducer
});
