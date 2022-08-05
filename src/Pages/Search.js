import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";
import { ReactComponent as HumidityIcon } from "../assets/images/humidity.svg";
import { ReactComponent as WindSpeedIcon } from "../assets/images/windSpeed.svg";
import { ReactComponent as TemperatureIcon } from "../assets/images/thermometer.svg";
import "./Search.scss";

const Search = ({ locationArray, setLocationArray }) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const myapi = "3b73ba60020b3ca9b6ba259cf70a6931";
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${myapi}`;
  const shouldDisplayButton = location.length > 0;

  const buttonStyleInvisible = {
    visibility: "hidden",
  };

  const buttonStyleVisible = {
    backgroundColor: "transparent",
    color: "white",
    textAlign: "center",
    padding: "10px",
    borderRadius: "15px",
    borderStyle: "solid",
    borderWidth: "medium",
    borderColor: "lightgray",
  };

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(currentURL).then((response) => {
        setData(response.data);
      });

      setLocation("");
    }
  };

  //console.log("ovo je detailed data", detailedData);
  const handleClearClick = () => {
    setLocation("");
  };

  const handleBookmark = (bookmarkData, locationArray) => {
    setLocationArray(filterArray(locationArray, bookmarkData));
  };

  function filterArray(array, location) {
    let filtered = array.filter((arrayLocation) => {
      if (arrayLocation.name === location.name) {
        return arrayLocation;
      }
    });

    if (filtered.length === 0) {
      return [...array, location];
    } else {
      return array;
    }
  }

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
              style={!data.name ? buttonStyleInvisible : buttonStyleVisible}
              onClick={() => {
                handleBookmark(data, locationArray);
                console.log(data);
                console.log(locationArray);
              }}
            >
              {data.name ? "Bookmark" : null}
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
