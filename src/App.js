import "../src/App.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Overview from "./Pages/Overview";
import DetailWeather from "./Pages/DetailWeather";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3b73ba60020b3ca9b6ba259cf70a6931"
      )
      .then((response) => {
        setWeather(response.data.wind);
      });
  }, []);
  console.log(weather);

  return (
    <div className="App">
      <div>
        <button></button>
      </div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/details" element={<DetailWeather />} />
      </Routes>
    </div>
  );
}

export default App;
