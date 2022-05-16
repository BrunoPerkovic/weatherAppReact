import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
/* import Conditions from "../Conditions/Conditions";
 */ import Card from "../Card/Card";
/* import ViewStats from "../ViewStats/ViewStats";
 */
const cities = [
  {
    location: "Split, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDate: "Friday, 11AM",
  },
  {
    location: "Šibenik, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDate: "Friday, 11AM",
  },
  {
    location: "Zagreb, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDate: "Friday, 11AM",
  },
  {
    location: "Zadar, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDate: "Friday, 11AM",
  },
  {
    location: "Osijek, Croatia",
    currentTemperature: "21°C",
    currentWinds: "Light Breeze",
    currentClouds: "Clear Sky",
    timeAndDate: "Friday, 11AM",
  },
];

const NasSwiper = () => {
  return (
    <div className="Swiper">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
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
                timeAndDate,
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
                    timeAndDate,
                  }}
                />
                {/* <Card {...city} /> */}
                {/* <ViewStats />
                <Conditions /> */}
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
