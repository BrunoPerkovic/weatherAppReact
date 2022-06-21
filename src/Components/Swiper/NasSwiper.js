import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMediaQuery } from "react-responsive";
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
  "thunderstorm with light drizzle": "slika",
  "thunderstorm with drizzle": "slika",
  "thunderstorm with heavy drizzle": "slika",
  "light itensity drizzle": "slika",
  drizzle: "slika",
  "heavy itensity drizzle": "slika",
  "light itensity drizzle rain": "slika",
  "drizzle rain": "slika",
  "heavy itensity drizzle rain": "slika",
  "shower rain and drizzle": "slika",
  "heavy shower rain and drizzle": "slika",
  "shower drizzle": "slika",
  "light rain": "slika",
  "moderate rain": "slika",
  "heavy itensity rain": "slika",
  "very heavy rain": "slika",
  "extreme rain": "slika",
  "freezing rain": "slika",
  "light itensity shower rain": "slika",
  "shower rain": "slika",
  "heavy itensity shower rain": "slika",
  "ragged shower rain": "slika",
  "light snow": lightSnow,
  Snow: lightSnow,
  "Heavy snow": heavySnow,
  Sleet: sleet,
  "Light shower sleet": "slika",
  "Shower sleet": "slika",
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
  tornado: tornado,
  "clear sky": clearSky,
  "few clouds": fewClouds,
  "scattered clouds": scatteredClouds,
  "broken clouds": brokenClouds,
  "overcast clouds": overcast,
};

const NasSwiper = ({ locationArray, setLocationArray }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div className="Swiper">
      <Swiper
        slidesPerView={isDesktopOrLaptop ? 6 : 1.8}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        rebuildOnUpdate={true}
      >
        {locationArray.map((location, i) => {
          return (
            <SwiperSlide key={i}>
              <WeatherIcon
                weatherIcon={weatherObject[location.weather[0].description]}
              />
              <WeatherCard
                location={location.name}
                currentTemperature={location.main.temp.toFixed()}
                currentWinds={location.wind.speed}
                currentClouds={location.main.description}
                currentPressure={location.main.pressure}
                windSpeed={location.wind.speed}
                humidityPercentage={location.main.humidity}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
