import fetch from 'isomorphic-fetch'
import request from 'request'

const API_KEY = '8bd9f0a43ac3fad11f9aa25aac407005'

function url(lat, lng){
  return `https://api.forecast.io/forecast/${API_KEY}/${lat},${lng}?exclude=[minutely,hourly,daily,alerts,flags]&units=si`
}

module.exports = function getWeatherByCoordinate(lat, lng){
  return fetch(url(lat, lng), {method: 'GET',timeout: 5000});
}
