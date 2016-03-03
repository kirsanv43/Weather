// import "babel-polyfill";
import fetch from 'isomorphic-fetch'

function url(lat, lng){
  return `/getWeather/${lat}/${lng}` ///`https://api.forecast.io/forecast/8bd9f0a43ac3fad11f9aa25aac407005/${lat},${lng}`
}

export function getWeatherByCoordinate(lat, lng){
  return fetch(url(lat, lng)).catch(function(error) {
    console.log('request failed', error)
  });
}
