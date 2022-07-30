import React from "react";
import Constants from "../../assets/Constants";
const WeatherIcon = ({ weatherIcon }) => {
  return (
    <div className="weatherCard__icon">
      <img src={weatherIcon} alt="weather icon" />
    </div>
  );
};

export default WeatherIcon;
