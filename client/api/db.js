import * as weatherStates from '../redux/statuses/weatherLoad'

if (!window.localStorage.cities) {
  window.localStorage.cities = JSON.stringify({cities:[]});
  console.log(window.localStorage.cities);
}


export function getCities(){
  return (JSON.parse(window.localStorage.cities)).cities;
}

export function removeCity(id){
  let jsonData = JSON.parse(window.localStorage.cities);
  for (var i = 0; i < jsonData.cities.length; i++) {
    if(jsonData.cities[i].id === id){
      jsonData.cities.splice(i,1);
    }
  }
  window.localStorage.cities = JSON.stringify(jsonData);
}

export function saveCity(id, lat, lng, name) {
  let jsonData = JSON.parse(window.localStorage.cities);
  jsonData.cities.push({
    id,
    lat,
    lng,
    name,
    status: weatherStates.UNDEFINED
  });
  window.localStorage.cities = JSON.stringify(jsonData);
}
