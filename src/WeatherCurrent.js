import React from "react";
import DateFormat from "./DateFormat";
import Icon from "./Icon";
import TemperatureFormat from "./TemperatureFormat";


export default function WeatherCurrent(props) {
  return (
    <div className="WeatherCurrent">
      <div className="row">
      <div className="col-4">
       <h1 className="text-capitalize">{props.data.city}</h1>
        <DateFormat date={props.data.date} />
        <TemperatureFormat fahrenheit={props.data.temperature} />
         </div>
      <div className="col-4">
              <Icon code={props.data.icon} size={55} />
              <span className="text-capitalize">{props.data.description}</span>
            </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/ph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}