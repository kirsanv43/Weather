import "babel-polyfill";
import fetch from 'isomorphic-fetch'

function url(lat, lng){
  return `http://api.openweathermap.org/data/2.5/weather?APPID=e747a58014a55dee6ae7e1dca103a5d5&lat=${lat}&lon=${lng}&units=metric`
} 

export function getWeatherByCoordinate(lat, lng){
  return fetch(url(lat, lng)).then((response) => {
    return response.json()
  });
}
