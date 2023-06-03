import React from "react";

export default function DateFormat(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(props.date);
  const day = days[date.getDay()];
  let hours = date.getHours();
  let meridian = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes} {meridian}
    </div>
  );
}