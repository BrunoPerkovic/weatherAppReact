import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";
import { ReactComponent as BookmarkIcon } from "../Components/Navbar/navbar-icons/bookmark-white.svg";
import { ReactComponent as HumidityIcon } from "../assets/images/humidity.svg";
import { ReactComponent as WindSpeedIcon } from "../assets/images/windSpeed.svg";
import { ReactComponent as TemperatureIcon } from "../assets/images/thermometer.svg";
import "./Search.scss";

const Search = ({ locationArray, setLocationArray }) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const myapi = "3b73ba60020b3ca9b6ba259cf70a6931";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${myapi}`;
  const shouldDisplayButton = location.length > 0;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      console.log(location);
      setLocation("");
    }
  };

  const handleClearClick = () => {
    setLocation("");
  };

  const handleBookmark = (bookmarkData) => {
    if (locationArray.indexOf(bookmarkData) === -1) {
      setLocationArray([...locationArray, bookmarkData]);
    }
    console.log("ovo je bookmark data: ", bookmarkData);
  };

  return (
    <div className="search">
      <Settings />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter Location Here"
          onKeyUp={searchLocation}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        {shouldDisplayButton ? (
          <button onClick={handleClearClick}>Clear Search</button>
        ) : null}
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="bookmarkLocation">
            <button
              onClick={() => {
                handleBookmark(data);
                console.log(data);
                console.log(locationArray);
              }}
            >
              {data.name ? <BookmarkIcon /> : null}
            </button>
          </div>
        </div>

        <div className="middle">
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="weatherInformation">
              <div className="weatherInformation__image">
                <TemperatureIcon />
              </div>
              {data.main ? (
                <p className="weatherInformation_prop">
                  {data.main.feels_like.toFixed()}°C
                </p>
              ) : null}
              <p className="weatherInformation__text">Feels Like</p>
            </div>

            <div className="weatherInformation">
              <div className="weatherInformation__image">
                <HumidityIcon />
              </div>
              {data.main ? (
                <p className="weatherInformation__prop">
                  {data.main.humidity}%
                </p>
              ) : null}
              <p className="weatherInformation__text">Humidity</p>
            </div>

            <div className="weatherInformation">
              <div className="weatherInformation__image">
                <WindSpeedIcon />
              </div>
              {data.wind ? (
                <p className="weatherInformation__prop">
                  {data.wind.speed.toFixed()} KM/H
                </p>
              ) : null}
              <p className="weatherInformation__text">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Search;
