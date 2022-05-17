import React from "react";
import "./WeatherIcon.scss";
const WeatherIcon = ({ weatherIcon }) => {
  return (
    <div className="weatherIcon">
      <img src={weatherIcon} alt="weather icon" />
    </div>
  );
};

export default WeatherIcon;
