import React from "react";
import BackButton from "../Components/BackButton/index";
import WeatherImage from "../Components/WeatherImage/WeatherImage";
import Graph from "../Components/Graph/Graph";
import ThreeDaysForecast from "../Components/ThreeDaysForecast/ThreeDaysForecast";
import { BackpageCard } from "../Components/BackpageCard/index";
import "./DetailWeather.scss";
const DetailWeather = () => {
  return (
    <div className="detailWeather">
      <BackButton />
      <WeatherImage />
      <Graph />
      <BackpageCard />
      <ThreeDaysForecast />
    </div>
  );
};

export default DetailWeather;
