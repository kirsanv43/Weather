// import "babel-polyfill";
import fetch from 'isomorphic-fetch'

function url(lat, lng){
  return `/getWeather/${lat}/${lng}`;
}

export async function getWeatherByCoordinate(lat, lng) {
  return fetch(url(lat, lng))
  // .catch(function(error) {
  //   console.log('request failed', error)
  // });
}
