import uuid from 'node-uuid'
import * as db from 'api/db'
import {loadWeather} from './weather'
export * from './weather'
import {
  ADD_CITY,SELECT_CITY,REMOVE_CITY
} from './types'
export function addCity(id, name, temp, lat, lng) {
  return {
    type: ADD_CITY,
    id: id || uuid.v4(),
    name,
    temp,
    lat,
    lng
  }
}

export function removeCity(id) {
  db.removeCity(id);
  return {
    type: REMOVE_CITY,
    id: id
  }
}

export function selectCity(name,lat, lng) {
  return {
    type: SELECT_CITY,
    name,
    lat,
    lng
  }
}

// export function selectCityAsync(name,lat, lng) {
//   return dispatch => {
//     dispatch(selectCity(name,lat, lng));
//     dispatch(loadWeather(id, lat, lng));
//   }
//   return {
//     type: SELECT_CITY,
//     name,
//     lat,
//     lng
//   }
// }

export function addCityByLocation(lat, lng, name) {
  let id = uuid.v4();
  db.saveCity(id, lat, lng, name);
  return dispatch => {
    dispatch(addCity(id, name));
    dispatch(loadWeather(id, lat, lng));
    dispatch(selectCity(undefined,undefined, undefined));
  }
}
