if (!window.localStorage.cities) {
  window.localStorage.cities = JSON.stringify({cities:[]});
  console.log(window.localStorage.cities);
}


export function getCities(){
  return (JSON.parse(window.localStorage.cities)).cities;
}

export function saveCity(lat, lng, name) {
  let jsonData = JSON.parse(window.localStorage.cities);
  jsonData.cities.push({
    lat,
    lng,
    name
  });
  window.localStorage.cities = JSON.stringify(jsonData);
}
