import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BackIcon } from "./../assets/images/507257.svg";
import ThreeDaysForecast from "../Components/ThreeDaysForecast/ThreeDaysForecast";
import Graph from "../Components/Graph/Graph";
import InfoIcons from "../Components/InfoIcons/InfoIcons";
import { BackpageCard } from "../Components/BackpageCard/index";
import "./DetailWeather.scss";
const DetailWeather = ({ locationArray, setLocationArray }) => {
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
      {locationArray.map((location) => {
        return (
          <>
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
              {location.name}
              <br /> {location.sys.country}
            </div>

            <div className="detailWeather__temperature">
              {location.main.temp.toFixed()}
              <span>°C</span>
            </div>

            <InfoIcons />

            <Graph />

            <BackpageCard
              //icon={weatherIcon}
              temperature={location.main.temp.toFixed()}
              //time={time}
            />

            <ThreeDaysForecast
              maxTemp={location.main["temp_max"]}
              minTemp={location.main["temp_min"]}
              nameDay={day}
              //weatherIcon={weatherIcon}
            />
          </>
        );
      })}
    </div>
  );

  /* <div className="detailWeather">
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
        {location}
        <br /> {country}
      </div>

      <div className="detailWeather__temperature">
        {temperature}
        <span>°C</span>
      </div>

      <InfoIcons />

      <Graph />

      <BackpageCard icon={weatherIcon} temperature={temperature} time={time} />

      <ThreeDaysForecast
        maxTemp={maxTemp}
        minTemp={minTemp}
        nameDay={nameDay}
        weatherIcon={weatherIcon}
      />
    </div> */
};

export default DetailWeather;
