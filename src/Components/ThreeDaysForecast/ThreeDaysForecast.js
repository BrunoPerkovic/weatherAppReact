import React from "react";
import "./ThreeDaysForecast.scss";

const ThreeDaysForecast = ({ nameDay, weatherIcon, maxTemp, minTemp }) => {
  return (
    <div className="forecast">
      <div className="forecast__row">
        <div className="forecast__days">
          <div>Monday {nameDay} </div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            15°C{maxTemp} 10°C{minTemp}
          </div>
        </div>
      </div>

      <div className="forecast__row">
        <div className="forecast__days">
          <div>Tuesday {nameDay} </div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            15°C{maxTemp} 10°C{minTemp}
          </div>
        </div>
      </div>

      <div className="forecast__row">
        <div className="forecast__days">
          <div>Wednesday {nameDay} </div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            15°C{maxTemp} 10°C{minTemp}
          </div>
        </div>

      </div>
    </div>
  );
};
export default ThreeDaysForecast;
