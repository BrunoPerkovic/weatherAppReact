import React from "react";
import "./BackpageCard.scss";

export const BackpageCard = ({ icon, temperatureArray, time }) => {
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    if (hour < 13) {
      return `${hour} am`;
    } else {
      return `${hour} pm`;
    }
  }

  return (
    <div className="backpageCards">
      <div className="backpageCards__info">
        <div className="backpageCards__icons">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
            alt=""
          />{" "}
          {icon}{" "}
        </div>

        <div className="backpageCards__temp">
          {temperatureArray[1].temp.toFixed()} <span>°C</span>{" "}
        </div>

        <div className="backpageCards__time">
          {" "}
          {timeConverter(temperatureArray[1].dt)}{" "}
        </div>
      </div>

      <div className="backpageCards__info">
        <div className="backpageCards__icons">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
            alt=""
          />{" "}
          {icon}{" "}
        </div>

        <div className="backpageCards__temp">
          {temperatureArray[2].temp.toFixed()}
          <span>°C</span>{" "}
        </div>

        <div className="backpageCards__time">
          {" "}
          {timeConverter(temperatureArray[2].dt)}{" "}
        </div>
      </div>

      <div className="backpageCards__info">
        <div className="backpageCards__icons">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/606/606795.png"
            alt=""
          />{" "}
          {icon}{" "}
        </div>

        <div className="backpageCards__temp">
          {temperatureArray[3].temp.toFixed()}
          <span>°C</span>{" "}
        </div>

        <div className="backpageCards__time">
          {" "}
          {timeConverter(temperatureArray[3].dt)}
        </div>
      </div>
    </div>
  );
};
