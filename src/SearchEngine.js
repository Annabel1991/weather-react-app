import React, { useState } from "react";
import axios from "axios";
import "./mainWeather.css";
import WeatherCurrent from "./WeatherCurrent";
import WeekForecast from "./WeekForecast";

export default function SearchEngine(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
      
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
  
    function handleCityChange(event) {
      setCity(event.target.value);
    }

      function search() {
      const apiKey = "54d11e99c53adac5dcd32b4969b4b1cf";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
    }
     
    if (weatherData.ready) {
      return (
        <div className="SearchEngine">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter your city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-sm-3 mt-2 mt-sm-0 ps-sm-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-grey-primary w-100"
                />
              </div>
              </div>
      </form>
          <WeatherCurrent data={weatherData} />
          <WeekForecast coordinates={weatherData.coordinates} />
        </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }