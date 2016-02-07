import {ADD_CITY} from './types'

export function addCity(name){  
  return {
    type:ADD_CITY,
    name:name
  }
}
