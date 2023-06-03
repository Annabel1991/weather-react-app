import React, { useState } from 'react';

export default function TemperatureFormat(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function celsius() {
    return (props.fahrenheit - 32) * 5 / 9;
  }
  if (unit === "celsius") {
    return (
      <div className="TemperatureFormat">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            {" "}°C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureFormat">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          ° C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}