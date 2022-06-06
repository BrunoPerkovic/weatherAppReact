import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Settings from "../Components/Settings/Settings";
import { ReactComponent as BookmarkIcon } from "../Components/Navbar/navbar-icons/bookmark-white.svg";

const Search = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [locationArray, setLocationArray] = useState([]);

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

  const handleBookmark = () => {
    setLocationArray(locationArray.push(data));
    console.log(locationArray);
  };

  return (
    <div className="search">
      <Settings />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter Location Here"
          onKeyUp={searchLocation}
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
                handleBookmark();
              }}
            >
              <BookmarkIcon />
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
            <div className="feels">
              <div>TU ce ic slika termostata</div>
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <div>Tu ce ic slika za vlagu</div>
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              <div> tu ce ic slika za brzinu vitra </div>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} KM/H</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Search;
