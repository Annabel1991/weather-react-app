import React from "react";
import DateFormat from "./DateFormat";
import Icon from "./Icon";
import TemperatureFormat from "./TemperatureFormat";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
      <div className="col-4">
          <div className="d-flex">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      </div>
      </div>
      <div className="col-4">
          <div className="d-flex">
            <div>
              <Icon code={props.data.icon} size={55} />
            </div>

            <div>
              <TemperatureFormat fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}