import React from "react";
import "./Card.scss";
/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const Card = ({
  location,
  currentTemperature,
  celsisus,
  currentWinds,
  currentClouds,
  timeAndDay,
}) => {
  return (
    <div className="weather">
      {/*       <WeatherIcon weatherIcon="https://cdn-icons-png.flaticon.com/512/2570/2570483.png" />
       */}{" "}
      <div className="weather__location">{location}</div>
      <div className="weather__information">
        <div className="weather__temperature"> {currentTemperature} </div>
        <div className="weather__windAndCloud">
          <p className="weather__windAndCloud--wind">{currentWinds} </p>
          <p className="weather__windAndCloud--cloud">{currentClouds} </p>
        </div>
      </div>
      <div className="weather__timeAndDay">{timeAndDay} </div>
      <div className="weather__viewStatsButton">asdgasg</div>
    </div>
  );
};
export default Card;
