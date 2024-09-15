function refreshTempSize(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "5c293o80a8f158401teffb34fdeeebb7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=merit`;
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
