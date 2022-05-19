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
import axios from "axios";

const initialValues = [
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
    lon: 15.8942,
    lat: 43.7343,
  },
  {
    location: "Zadar, Croatia",
    lon: 15.8942,
    lat: 43.7343,
  },
  {
    location: "Osijek, Croatia",
    lon: 15.8942,
    lat: 43.7343,
  },
];

const NasSwiper = () => {
  const [weather, setWeather] = useState("");

  const [cities, setCities] = useState([]);

  useEffect(() => {
    // const citiesCopy = [...cities];

    Promise.all(
      initialValues.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=b734bae5a310113c213110ccdbf8a446`
        )
      )
    ).then((values) => {
      console.log(values);
      setCities(
        values.map((value) => {
          return {
            location: value.data.name,
          };
        })
      );
    });

    // .then((response) => {
    //   const updatedCity = {
    //     ...city,
    //     currentTemperature: response.data.main.temp,
    //   };

    //   citiesCopy[i] = updatedCity;
    //   setCities(citiesCopy);
    //   i++;
    //   console.log(i, cities);
    // });
  }, []);
  /*   console.log(cities);
   */
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
              },
              i
            ) => (
              <SwiperSlide key={location}>
                <WeatherIcon weatherIcon={sunny} />
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
                  precipitationPercentage="10%"
                  windSpeed="5km/h"
                  humidityPercentage="50%"
                />
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
