import React from "react";
import "./Conditions.scss";
const Conditions = ({ currentPressure, humidityPercentage, windSpeed }) => {
  return (
    <div className="conditions">
      <div className="conditions__row">
        <div className="conditions__icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3313/3313888.png"
            alt="precipitation icon"
          />
        </div>

        <div className="conditions__text">Pressure</div>
        <div className="conditions__percentage">
          <p className="conditionsPercentagePrecipitation">
            {currentPressure} hPa
          </p>
        </div>
      </div>
      <div className="conditions__row">
        <div className="conditions__icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/606/606797.png"
            alt="humidity icon"
          />
        </div>

        <div className="conditions__text">Humidity</div>
        <div className="conditions__percentage">
          <p className="conditionsPercentageHumidity">{humidityPercentage}%</p>
        </div>
      </div>

      <div className="conditions__row">
        <div className="conditions__icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/615/615579.png"
            alt="wind icon"
          />
        </div>

        <div className="conditions__text">Wind</div>
        <div className="conditions__percentage">
          <p className="conditionsPercentageWind">{windSpeed} km/h </p>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
