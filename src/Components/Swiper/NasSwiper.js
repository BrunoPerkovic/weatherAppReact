import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Conditions from "../Conditions/Conditions";
import Card from "../Card/Card";
import ViewStats from "../ViewStats/ViewStats";
import { useMediaQuery } from "react-responsive";
import "./NasSwiper.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

import axios from "axios";

import brokenClouds from "../WeatherIcon/brokenClouds.png";
import clearSky from "../WeatherIcon/clearSky.png";
import dust from "../WeatherIcon/dust.png";
import fewClouds from "../WeatherIcon/fewClouds.png";
import fog from "../WeatherIcon/fog.png";
import haze from "../WeatherIcon/haze.png";
import heavySnow from "../WeatherIcon/heavySnow.png";
import lightRainAndSnow from "../WeatherIcon/lightRainAndSnow.png";
import lightSnow from "../WeatherIcon/lightSnow.png";
import mist from "../WeatherIcon/mist.png";
import overcast from "../WeatherIcon/overcast.png";
import rainAndSnow from "../WeatherIcon/rainAndSnow.png";
import sand from "../WeatherIcon/sand.png";
import scatteredClouds from "../WeatherIcon/scatteredClouds.png";
import showerSnow from "../WeatherIcon/showerSnow.png";
import sleet from "../WeatherIcon/sleet.png";
import smoke from "../WeatherIcon/smoke.png";
import tornado from "../WeatherIcon/tornado.png";
import volcanicAsh from "../WeatherIcon/volcanicAsh.png";
import drizzle from "../WeatherIcon/drizzle.png";
import extremerain from "../WeatherIcon/extremerain.png";
import freezerain from "../WeatherIcon/freezerain.png";
import heavyrain from "../WeatherIcon/heavyrain.png";
import moderaterin from "../WeatherIcon/moderaterin.png";
import showerrain from "../WeatherIcon/showerrain.png";
import showersleet from "../WeatherIcon/showersleet.png";
import thunmoddriz from "../WeatherIcon/thunmoddriz.png";
import thunlitdriz from "../WeatherIcon/thunlitdriz.png";
import thunhevdriz from "../WeatherIcon/thunhevdriz.png";

const dayNames = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

const weatherObject = {
  "thunderstorm with rain": "slika",
  "thunderstorm with heavy rain": "slika",
  "light thunderstorm": "slika",
  thunderstorm: "slika",
  "heavy thunderstorm": "slika",
  "ragged thunderstorm": "slika",
  "thunderstorm with light drizzle": thunlitdriz,
  "thunderstorm with drizzle": thunmoddriz,
  "thunderstorm with heavy drizzle": thunhevdriz,
  "light itensity drizzle": "slika",
  drizzle: drizzle,
  "heavy itensity drizzle": "slika",
  "light itensity drizzle rain": "slika",
  "drizzle rain": "slika",
  "heavy itensity drizzle rain": "slika",
  "shower rain and drizzle": "slika",
  "heavy shower rain and drizzle": "slika",
  "shower drizzle": "slika",
  "light rain": "slika",
  "moderate rain": moderaterin,
  "heavy itensity rain": heavyrain,
  "very heavy rain": heavyrain,
  "extreme rain": extremerain,
  "freezing rain": freezerain,
  "light itensity shower rain": showerrain,
  "shower rain": showerrain,
  "heavy itensity shower rain": showerrain,
  "ragged shower rain": "slika",
  "light snow": lightSnow,
  Snow: lightSnow,
  "Heavy snow": heavySnow,
  Sleet: sleet,
  "Light shower sleet": lightRainAndSnow,
  "Shower sleet": showersleet,
  "Light rain and snow": lightRainAndSnow,
  "Rain and snow": rainAndSnow,
  "Light shower snow": lightSnow,
  "Shower snow": showerSnow,
  "Heavy shower snow": heavySnow,
  mist: mist,
  Smoke: smoke,
  Haze: haze,
  "sand/ dust whirls": "slika",
  fog: fog,
  sand: sand,
  dust: dust,
  "volcanic ash": volcanicAsh,
  squalls: tornado,
  s: tornado,
  "clear sky": clearSky,
  "few clouds": fewClouds,
  "scattered clouds": scatteredClouds,
  "broken clouds": brokenClouds,
  "overcast clouds": overcast,
};

const initialCityData = [
  {
    location: "Split, Croatia",
    lon: 16.440193,
    lat: 43.508133,
  },
  {
    location: "Šibenik, Croatia",
    lon: 15.8942,
    lat: 43.7343,
  },
  {
    location: "Zagreb, Croatia",
    lon: 15.966568,
    lat: 45.815399,
  },
  {
    location: "Zadar, Croatia",
    lon: 15.24222,
    lat: 44.11972,
  },
  {
    location: "Osijek, Croatia",
    lon: 18.6744173023,
    lat: 45.5545161153,
  },
  {
    location: "Shanghai, China",
    lon: 121.469179,
    lat: 31.224361,
  },
];

const NasSwiper = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Promise.all(
      initialCityData.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=3b73ba60020b3ca9b6ba259cf70a6931`
        )
      )
    ).then((values) => {
      console.log(values);
      setCities(
        values.map((value) => {
          const date = new Date(value.data.dt * 1000);
          const day = dayNames[date.getDay()];
          const hours = date.getHours();

          return {
            location: value.data.name,
            currentTemperature: value.data.main.temp.toFixed(),
            currentWinds: value.data.wind.speed,
            currentClouds: value.data.weather[0].description,
            timeAndDay: `${day}, ${hours}sati`, //ovo ne radi kako triba, uvik vuce istu uru bez obzira na timezone
            windSpeed: value.data.wind.speed,
            humidityPercentage: value.data.main.humidity,
            currentPressure: value.data.main.pressure,
          };
        })
      );
    });
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  console.log(cities);
  return (
    <div className="Swiper">
      <Swiper
        slidesPerView={isDesktopOrLaptop ? 6 : 2}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        rebuildOnUpdate={true}
      >
        {cities
          .filter((city) => city.location !== "Zagreb, Croatia")
          .map(
            (
              {
                location,
                currentTemperature,
                currentWinds,
                currentClouds,
                timeAndDay,
                currentPressure,
                windSpeed,
                humidityPercentage,
              },
              i
            ) => (
              <SwiperSlide key={location}>
                {/* {setWeatherIcons(currentClouds)} */}
                <WeatherIcon weatherIcon={weatherObject[currentClouds]} />
                <Card
                  {...{
                    location,
                    currentTemperature,
                    currentWinds,
                    currentClouds,
                    timeAndDay,
                  }}
                />
                <ViewStats />
                <Conditions
                  {...{ currentPressure, windSpeed, humidityPercentage }}
                />
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
