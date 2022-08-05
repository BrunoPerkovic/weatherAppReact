import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BackIcon } from "./../assets/images/507257.svg";
import ThreeDaysForecast from "../Components/ThreeDaysForecast/ThreeDaysForecast";
import Graph from "../Components/Graph/Graph";
import InfoIcons from "../Components/InfoIcons/InfoIcons";
import { BackpageCard } from "../Components/BackpageCard/index";
import WeatherIcon from "../Components/WeatherIcon/WeatherIcon";
import { BIGOBJECT } from "../assets/Constants";
import "./DetailWeather.scss";

const DetailWeather = () => {
  const city = useLocation();

  return (
    <div className="detailWeather">
      <Link to="/" className="detailWeather__back">
        <BackIcon />
      </Link>

      <div className="detailWeather__weatherIcon">
        <WeatherIcon weatherIcon={BIGOBJECT[city.state.description].image} />
      </div>

      <div className="detailWeather__cityName">
        {city.state.location}
        <br /> {city.state.country}
      </div>

      <div className="detailWeather__temperature">
        {city.state.currentData.temp.toFixed()} <span>°C</span>
      </div>

      <InfoIcons
        humidity={city.state.currentHumidity}
        pressure={city.state.currentPressure}
        wind={city.state.windSpeed}
      />

      <Graph />

      <BackpageCard
        temperatureArray={city.state.hourlyData} // objekt
      />

      <ThreeDaysForecast dailyArray={city.state.dailyData} />
    </div>
  );
};

export default DetailWeather;
