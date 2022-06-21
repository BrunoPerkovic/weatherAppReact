import React from "react";
import "./WeatherCard.scss";
import Conditions from "../Conditions/Conditions";
import { useNavigate } from "react-router-dom";
/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const WeatherCard = ({
  location,
  currentTemperature,
  currentPressure,
  celsisus,
  windSpeed,
  humidityPercentage,
  currentWinds,
  currentClouds,
  timeAndDay,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="weatherCard">
        <div className="weatherCard__location">{location}</div>
        <div className="weatherCard__information">
          <div className="weatherCard__temperature">
            {" "}
            {currentTemperature}°C{" "}
          </div>
          <div className="weatherCard__windAndCloud">
            <p className="weatherCard__windAndCloud--wind">
              {currentWinds} km/h{" "}
            </p>
            <p className="weatherCard__windAndCloud--cloud">{currentClouds} </p>
          </div>
        </div>
        <div className="weatherCard__timeAndDay">{timeAndDay} </div>
      </div>
      <button
        className="weatherCard__button button"
        onClick={() => navigate("/details")}
      >
        View stats
      </button>
      <Conditions {...{ currentPressure, windSpeed, humidityPercentage }} />
    </>
  );
};
export default WeatherCard;
