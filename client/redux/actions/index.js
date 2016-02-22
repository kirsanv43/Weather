import uuid from 'node-uuid' 
import * as db from '../api/db'
export * from './weather'

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

export function addCityByLocation(lat, lng, name) {
  let id = uuid.v4();
  db.saveCity(id, lat, lng, name);
  return dispatch => {
    dispatch(addCity(id, name));
    dispatch(loadWeather(id, lat, lng));
  }
  return {
    type: ADD_CITY,
    lat,
    lng,
    name
  }
}
