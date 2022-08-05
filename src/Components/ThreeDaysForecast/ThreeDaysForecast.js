import React from "react";
import "./ThreeDaysForecast.scss";

const ThreeDaysForecast = ({ weatherIcon, dailyArray }) => {
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var day = a.getDay();

    if (day === 0) {
      return "Sunday";
    } else if (day === 1) {
      return "Monday";
    } else if (day === 2) {
      return "Tuesday";
    } else if (day === 3) {
      return "Wednesday";
    } else if (day === 4) {
      return "Thursday";
    } else if (day === 5) {
      return "Friday";
    } else if (day === 6) {
      return "Saturday";
    }
  }

  return (
    <div className="forecast">
      <div className="forecast__row">
        <div className="forecast__days">
          <div>{timeConverter(dailyArray[1].dt)}</div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            Max:{dailyArray[1].temp.max.toFixed()} Min:
            {dailyArray[1].temp.min.toFixed()}{" "}
          </div>
        </div>
      </div>

      <div className="forecast__row">
        <div className="forecast__days">
          <div>{timeConverter(dailyArray[2].dt)} </div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            Max:{dailyArray[2].temp.max.toFixed()} Min:
            {dailyArray[2].temp.min.toFixed()}{" "}
          </div>
        </div>
      </div>

      <div className="forecast__row">
        <div className="forecast__days">
          <div> {timeConverter(dailyArray[3].dt)} </div>
        </div>

        <div className="forecast__icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1196/1196517.png"
            alt="weather icon"
          />{" "}
          {weatherIcon}
        </div>

        <div className="forecast__temps">
          <div>
            Max:{dailyArray[3].temp.max.toFixed()} Min:
            {dailyArray[3].temp.min.toFixed()}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThreeDaysForecast;
