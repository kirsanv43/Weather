import "babel-polyfill";
import fetch from 'isomorphic-fetch'
import * as db from '../api/db'
import uuid from 'node-uuid'

import {
  getWeatherByCoordinate
} from '../api/weather'
import {
  ADD_CITY
} from './types'


export function addCity(id,name, temp) {
  return {
    type: ADD_CITY,
    id: id,
    name,
    temp
  }
}

//export function loadWeather

export function addCityByLocation(lat, lng, name) {
  db.saveCity(lat, lng, name);
  return dispatch => {
    return getWeatherByCoordinate(lat, lng).then((response) => { 
      dispatch(addCity(uuid.v4(),name, response.main.temp))
    });

    // return new
    //((resolve, reject) => {
    //     var resp = getWeatherByCoordinate(lat, lng);
    //     console.log(resp);
    //     setTimeout(()=>{}, 5000);
    // })
  }
  return {
    type: ADD_CITY,
    lat,
    lng,
    name
  }
}
