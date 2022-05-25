import React, { useState, useEffect } from "react";
import "./WeatherImage.scss";

const WeatherImage = ({
  location,
  currentTemperature,
  weatherIcon,
  rainChance,
  humidityPercentage,
  currentWinds,
}) => {
  return (
    <div className="weatherImage">
      <div className="details">
        <div>
          <div className="details__cityName">
            Šibenik,
            <br /> Croatia {location}
          </div>

          <div className="details__temperature">15°C {currentTemperature}</div>
        </div>

        <div className="details__weatherIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/172/172928.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>
      </div>

      <div className="infoIcons">
        <p className="infoIcons__item infoIcons__item--red">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3313/3313888.png"
            alt="rain"
          />{" "}
          {rainChance}
        </p>

        <p className="infoIcons__item infoIcons__item--blue">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png"
            alt=""
          />
          {humidityPercentage}
        </p>

        <p className="infoIcons__item infoIcons__item--yellow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/959/959711.png"
            alt=""
          />{" "}
          {currentWinds}
        </p>
      </div>
    </div>
  );
};

export default WeatherImage;
