import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Conditions from "../Conditions/Conditions";
import Card from "../Card/Card";
import ViewStats from "../ViewStats/ViewStats";
import { useMediaQuery } from "react-responsive";
import "./NasSwiper.scss";
const cities = [
  {
    location: "Split, Croatia",
    currentTemperature: "21",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDay: "Friday, 11am",
  },
  {
    location: "Šibenik, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDay: "Friday, 11am",
  },
  {
    location: "Zagreb, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDay: "Friday, 11am",
  },
  {
    location: "Zadar, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDay: "Friday, 11am",
  },
  {
    location: "Osijek, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDay: "Friday, 11am",
  },
];

const NasSwiper = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

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
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
