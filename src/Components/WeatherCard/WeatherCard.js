import React, { useState } from "react";
import "./WeatherCard.scss";
import Conditions from "../Conditions/Conditions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WeatherCard = ({
  location,
  currentTemperature,
  currentPressure,
  windSpeed,
  humidityPercentage,
  currentWinds,
  currentClouds,
  timeAndDay,
  country,
  description,
  latitude,
  longitude,
}) => {
  const [detailedData, setDetailedData] = useState({});

  const KEY = "3b73ba60020b3ca9b6ba259cf70a6931";
  const detailedURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`;

  const navigate = useNavigate();
  const getDetailWeather = () => {
    axios.get(detailedURL).then((detailedResponse) => {
      console.log("ovo je detailed Response:", detailedResponse);
      setDetailedData(detailedResponse.data);
      navigate("/Details", {
        state: {
          currentData: detailedResponse.data.current,
          dailyData: detailedResponse.data.daily,
          hourlyData: detailedResponse.data.hourly,
          country: country,
          location: location,
          currentTemperature: currentTemperature,
          currentPressure: currentPressure,
          windSpeed: windSpeed,
          currentHumidity: humidityPercentage,
          description: description,
        },
      });
    });
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
            <p className="weatherCard__windAndCloud--cloud">{currentClouds}</p>
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
