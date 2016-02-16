import "babel-polyfill";
import fetch from 'isomorphic-fetch'
import * as db from '../api/db'
import {
  getWeatherByCoordinate
} from '../api/weather'
import {
  ADD_CITY
} from './types'


export function addCity(name, temp) {
  return {
    type: ADD_CITY,
    name,
    temp
  }
}

function url(lat, lng) {
  return `http://api.openweathermap.org/data/2.5/weather?APPID=e747a58014a55dee6ae7e1dca103a5d5&lat=${lat}&lon=${lng}&units=metric`
}

export function addCityByLocation(lat, lng, name) {
  db.saveCity(lat, lng, name);
  return dispatch => {

    return fetch(url(lat, lng)).then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response);
      dispatch(addCity("123", response.main.temp))
    })
  }
  return {
    type: ADD_CITY,
    lat,
    lng,
    name

  }
}
