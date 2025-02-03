const apiKey = "70f4a0036d16705ee47c99f1dfb745f5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "Bhimdatta") {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) {
    console.error("City is not found");
    alert("City is not found");
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp - 273.15) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "image/cloudes.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "image/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "image/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "image/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "image/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}

function handleSearch() {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearch);

// Add event listener for pressing the Enter key
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

checkWeather();
