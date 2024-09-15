function searchCity(city) {
  let apiKey = "5c293o80a8f158401teffb34fdeeebb7";
  let apiurl =
    "https://api.shecodes.io/weather/v1/current?query=#city&key=5c293o80a8f158401teffb34fdeeebb7&unit=merit";
  //city
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement = addEventListener("submit", handleSearchSubmit);
