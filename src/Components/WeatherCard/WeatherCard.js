import React from "react";
import "./WeatherCard.scss";
import Conditions from "../Conditions/Conditions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* import WeatherIcon from "../WeatherIcon/WeatherIcon";
 */ const WeatherCard = ({
  location,
  currentTemperature,
  currentPressure,
  windSpeed,
  humidityPercentage,
  currentWinds,
  currentClouds,
  timeAndDay,
  country,
  maxTemp,
  minTemp,
  //latitude,
  //longitude,
}) => {
  const KEY = "0376d687be89404d9d33122928edc567";
  const lokacija = "šibenik";
  //const URL = `https://api.geoapify.com/v1/geocode/search?lat=${latitude}&lon=${longitude}&apiKey=${KEY}`;
  function translateCoordinates() {
    axios
      .get(URL)
      .then((response) => {
        console.log("ovo je response", response.features);
      })
      .catch((error) => console.log(error));
  }
  const navigate = useNavigate();
  const getDetailWeather = () => {
    navigate("/Details", {
      state: {
        location: location,
        temperature: currentTemperature,
        pressure: currentPressure,
        windSpeed: windSpeed,
        wind: currentWinds,
        clouds: currentClouds,
        country: country,
        humidity: humidityPercentage,
        maxTemp: maxTemp,
        minTemp: minTemp,
      },
    });
    // translateCoordinates();
  };

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
        onClick={() => getDetailWeather()}
      >
        View stats
      </button>
      <Conditions {...{ currentPressure, windSpeed, humidityPercentage }} />
    </>
  );
};
export default WeatherCard;
