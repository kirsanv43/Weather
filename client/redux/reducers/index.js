import {
  combineReducers
} from 'redux'
import {
  ADD_CITY,LOADED_TEMPERATURE,LOAD_ERROR
} from '../actions/types'
import {
  routerStateReducer
} from 'redux-router';
import * as db from '../api/db'

let initState = db.getCities() || [];

function cities(state = initState, action) {
  switch (action.type) {
    case ADD_CITY:{
      return [...state, {
        id: action.id,
        name: action.name,
        temp: action.temp,
        status:action.status,
        error:action.error,
        lat:action.lat,
        lng:action.lng
      }]
      }
    case LOADED_TEMPERATURE:{
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id){
          state[i].temp = action.temp;
          state[i].status = action.status;
          break;
        }
      }
      return [...state]
    }
    case LOAD_ERROR:{
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id){
          state[i].error = action.error;
          state[i].status = action.status;
          break;
        }
      }
      return [...state]
    }
    default:
      return state;
  }
}


export default combineReducers({
  cities,
  routing: routerStateReducer
});
