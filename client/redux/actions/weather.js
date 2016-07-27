import * as Status from '../statuses/weatherLoad'
import {
  getWeatherByCoordinate
} from 'api/weather'
import {
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
export const loadWeather = (cityId, lat, lng) => async (dispatch) => {
  let params = {
    cityId,
    lat,
    lng
  };
  const response = await getWeatherByCoordinate(lat, lng);
  const body = await responseFromServer(response, dispatch, params);
  if ( typeof body.status !== 'undefined' && body.status !== 200) {
    return dispatch(loadError(params.cityId, `Error ${body.status}:${body.statusText}`));
  }
  responseFromWeatherServis(body, dispatch, params);
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
function responseFromWeatherServis(body, dispatch, params) {
  if (body) {
    if (body.currently) {
      dispatch(loadedWeather(params.cityId, body.currently.temperature));
    } else {
      dispatch(loadError(params.cityId, body.message || body.error));
    }
  }
}
