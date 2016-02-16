import "babel-polyfill";

function url(lat, lng){
  return `http://api.openweathermap.org/data/2.5/weather?APPID=e747a58014a55dee6ae7e1dca103a5d5&lat=${lat}&lon=${lng}&units=metric`
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


export function getWeatherByCoordinate(lat, lng){
  return httpGet(url(lat, lng)); 
}
