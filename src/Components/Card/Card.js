import React from "react";
import "./Card.scss";
/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const Card = ({
  location,
  currentTemperature,
  currentWinds,
  currentClouds,
  timeAndDate,
}) => {
  return (
    <div className="Card">
      {/*       <WeatherIcon weatherIcon="https://cdn-icons-png.flaticon.com/512/2570/2570483.png" />
       */}{" "}
      <div className="weatherLocation">{location}</div>
      <div className="weatherTemperatureInformation">
        <div className="weatherTemperature"> {currentTemperature} </div>

        <div className="weatherInformationContainer">
          <div className="windInformation">{currentWinds} </div>
          <div className="cloudInformation">{currentClouds} </div>
        </div>
      </div>
      <div className="dateAndTime">{timeAndDate} </div>
      <div className="viewWeatherStatsButton"></div>
    </div>
  );
};

export default Card;
