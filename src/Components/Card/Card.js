import React from "react";
import "./Card.scss";
/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const Card = ({
  location,
  currentTemperature,
  currentWinds,
  currentClouds,
  timeAndDay,
}) => {
  return (
    <div className="weather">
      {/*       <WeatherIcon weatherIcon="https://cdn-icons-png.flaticon.com/512/2570/2570483.png" />
       */}{" "}
      <div className="weather__location">{location}</div>
      <div className="weatherInformation">
        <div className="weatherInformation__temperature">
          {" "}
          {currentTemperature}{" "}
        </div>
        <div className="weatherInformation__windAndCloud">
          <div className="weatherInformation__windAndCloud--wind">
            {currentWinds}{" "}
          </div>
          <div className="weatherInformation__windAndCloud--cloud">
            {currentClouds}{" "}
          </div>
        </div>
      </div>
      <div className="weather__timeAndDay">{timeAndDay} </div>
      <div className="weather__viewStatsButton">asdgasg</div>
    </div>
  );
};
export default Card;
