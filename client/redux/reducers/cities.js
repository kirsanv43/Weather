import {
  ADD_CITY,LOADED_TEMPERATURE,LOAD_ERROR,REMOVE_CITY
} from '../actions/types'

import * as db from 'api/db'

let initState = db.getCities() || [];

export default function cities(state = initState, action) {
  switch (action.type) {
    case ADD_CITY:{
      const {id,name,temp,status,error,lat,lng} = action;
      return [...state, {id,name,temp,status,error,lat,lng}]
      }
    case LOADED_TEMPERATURE:{
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id){
          const {temp,status} = action;
          state[i]= Object.assign({},state[i],{temp,status});
          return  [...state];
        }
      }
      return [...state]
    }
    case REMOVE_CITY:{
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id){
           state.splice(i, 1);
          return  [...state];
        }
      }
      return [...state]
    }
    case LOAD_ERROR:{
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id){
            const {error,status} = action;
            state[i] = {...state[i],error,status};
          break;
        }
      }
      return [...state]
    }
    default:
      return state;
  }
}
