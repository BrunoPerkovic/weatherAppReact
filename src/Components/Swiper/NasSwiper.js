import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Conditions from "../Conditions/Conditions";
import Card from "../Card/Card";
import ViewStats from "../ViewStats/ViewStats";
import { useMediaQuery } from "react-responsive";
import "./NasSwiper.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import sunny from "../WeatherIcon/sunny.png";
import cloudy from "../WeatherIcon/cloudy.png";
import overheat from "../WeatherIcon/overheat.png";
import axios from "axios";
const dayNames = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

function setWeatherIcons(value) {
  if (value === "clear sky") {
    return <WeatherIcon weatherIcon={sunny} />;
  } else if (value === "broken clouds") {
    return <WeatherIcon weatherIcon={cloudy} />;
  } else if (value === "overcast clouds") {
    return <WeatherIcon weatherIcon={overheat} />;
  }
}

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
            timeAndDay: `${day}, ${hours}sati`,
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
                {setWeatherIcons(currentClouds)}
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
