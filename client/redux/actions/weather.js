import * as Status from '../constants/weather'
import {
  getWeatherByCoordinate
} from '../api/weather'
import {
  ADD_CITY,
  LOADED_TEMPERATURE,
  LOAD_ERROR
} from './types'

export function loadError(id, error, status) {
  return {
    type: LOAD_ERROR,
    id,
    status: status || Status.ERROR,
    error
  }
}

export function loadedWeather(id, temp, status) {
  return {
    type: LOADED_TEMPERATURE,
    id,
    temp,
    status: status || Status.LOADED
  }
}

export function loadWeather(cityId, lat, lng) {
  return dispatch => {
    let params = {
      cityId,
      lat,
      lng
    };
    getWeatherByCoordinate(lat, lng)
      .then(response => responseFromServer(response, dispatch, params),errorHandler)
      .then(response => responseFromWeatherServis(response, dispatch, params),errorHandler)
  }
}

function errorHandler(error){
  console.log(error);
}

/**
 * Обработчик запроса погоды на сервер
 */
function responseFromServer(resp, dispatch, params) {
  if (resp.status == 200) {
    return resp.json();
  } else {
    return dispatch(loadError(params.cityId, `Error code:${resp.status}`));
  }
}

/**
 * Обработчик запроса погоды на сервере
 */
function responseFromWeatherServis(resp, dispatch, params) {
  if (resp) {
    if (resp.currently) {
      dispatch(loadedWeather(params.cityId, resp.currently.temperature));
    } else {
      dispatch(loadError(params.cityId, resp.message || resp.error));
    }
  }
}
