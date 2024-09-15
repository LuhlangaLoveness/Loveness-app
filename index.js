function refreshTempSize(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  cityElement.innerHTML = response.data.city;
  console.log(response.data);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} Km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "5c293o80a8f158401teffb34fdeeebb7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshTempSize);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchCity(searchInputElement.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement = addEventListener("submit", handleSearchSubmit);
searchCity("Nelspruit");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];
