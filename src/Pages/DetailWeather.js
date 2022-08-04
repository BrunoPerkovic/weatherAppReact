import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BackIcon } from "./../assets/images/507257.svg";
import ThreeDaysForecast from "../Components/ThreeDaysForecast/ThreeDaysForecast";
import Graph from "../Components/Graph/Graph";
import InfoIcons from "../Components/InfoIcons/InfoIcons";
import { BackpageCard } from "../Components/BackpageCard/index";
import "./DetailWeather.scss";

const DetailWeather = () => {
  const city = useLocation();
  console.log("ovo je curr data", city.state.currentData);
  console.log("ovo je hourly data", city.state.hourlyData);
  console.log("ovo je daily data", city.state.dailyData);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <div className="detailWeather">
      <Link to="/" className="detailWeather__back">
        <BackIcon />
      </Link>

      <div className="detailWeather__weatherIcon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/172/172928.png"
          alt="weather icon"
        />
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
        //icon={weatherIcon}
        temperatureArray={city.state.hourlyData} // objekt
        //time={time}
      />

      <ThreeDaysForecast
        dailyArray={city.state.dailyData}
        //maxTemp={city.state.maxTemp}
        //minTemp={city.state.minTemp}
      />
    </div>
  );
};

export default DetailWeather;
