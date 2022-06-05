import React from "react";
import { Link } from "react-router-dom"
import { ReactComponent as BackIcon } from './../assets/images/507257.svg';
import ThreeDaysForecast from "../Components/ThreeDaysForecast/ThreeDaysForecast";
import Graph from "../Components/Graph/Graph";
import InfoIcons from "../Components/InfoIcons/InfoIcons";
import { BackpageCard } from "../Components/BackpageCard/index";
import "./DetailWeather.scss";
const DetailWeather = () => {

	return (
		<div className="detailWeather">

			<Link to="/" className="detailWeather__back">
				<BackIcon />
			</Link>

			<div className="detailWeather__weatherIcon">
				<img
					src="https://cdn-icons-png.flaticon.com/512/172/172928.png"
					alt="weather icon"
				/>
			</div>

			<div className="detailWeather__cityName">
				Šibenik,
				<br /> Croatia
			</div>

			<div className="detailWeather__temperature">15<span>°C</span></div>

			<InfoIcons />

			<Graph />

			<BackpageCard />

			<ThreeDaysForecast />

		</div>
	);
};

export default DetailWeather;
