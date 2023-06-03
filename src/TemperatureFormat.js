import React from "react";

export default function TemperatureFormat(props) {
  return (
    <div className="TemperatureFormat">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}