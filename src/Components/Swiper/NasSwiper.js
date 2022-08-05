import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMediaQuery } from "react-responsive";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { BIGOBJECT } from "../../assets/Constants";

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
        rebuildonupdate="true"
      >
        {locationArray.map((location, i) => {
          return (
            <SwiperSlide key={i}>
              <WeatherIcon
                weatherIcon={BIGOBJECT[location.weather[0].description].image}
              />
              <WeatherCard
                location={location.name}
                currentTemperature={location.main.temp.toFixed()}
                currentWinds={location.wind.speed}
                currentClouds={location.weather[0].description}
                currentPressure={location.main.pressure}
                windSpeed={location.wind.speed}
                humidityPercentage={location.main.humidity}
                country={location.sys.country}
                latitude={location.coord.lat}
                longitude={location.coord.lon}
                description={location.weather[0].description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NasSwiper;
