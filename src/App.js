import "../src/App.scss";
import { Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import DetailWeather from "./Pages/DetailWeather";
import Bookmark from "./Pages/Bookmark";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import React, { useState } from "react";

function App() {
  const [locationArray, setLocationArray] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Overview
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route
          path="/Details"
          element={
            <DetailWeather
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route
          path="/Search"
          element={
            <Search
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route
          path="/Bookmark"
          element={
            <Bookmark
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
