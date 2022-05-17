import React from "react";
import "./WeatherImage.scss";

const WeatherImage = ({
  location,
  temperature,
  weatherIcon,
  rainChance,
  humidityPercentage,
  windSpeed,
}) => {
  return (
    <div className="weatherImage">
      <div className="details">
        <div className="details__left">
          <div className="details__cityName">
            Šibenik,
            <br /> Croatia {location}
          </div>

          <div className="details__temperature">15°C {temperature}</div>
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
        <p className="infoIcons__rainChance">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3313/3313888.png"
            alt="rain"
          />{" "}
          10% {rainChance}
        </p>

        <p className="infoIcons__humidityPercentage">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1843/1843544.png"
            alt=""
          />
          25%{humidityPercentage}
        </p>

        <p className="infoIcons__windSpeed">
          <img
            src="https://cdn-icons-png.flaticon.com/512/959/959711.png"
            alt=""
          />{" "}
          19km/h{windSpeed}
        </p>
      </div>
    </div>
  );
};

export default WeatherImage;
