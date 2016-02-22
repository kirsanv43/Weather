import * as weatherStates from '../constants/weather'

if (!window.localStorage.cities) {
  window.localStorage.cities = JSON.stringify({cities:[]});
  console.log(window.localStorage.cities);
}


export function getCities(){
  return (JSON.parse(window.localStorage.cities)).cities;
}

export function saveCity(id, lat, lng, name) {
  let jsonData = JSON.parse(window.localStorage.cities);
  jsonData.cities.push({
    id,
    lat,
    lng,
    name,
    state: weatherStates.UNDEFINED
  });
  window.localStorage.cities = JSON.stringify(jsonData);
}
