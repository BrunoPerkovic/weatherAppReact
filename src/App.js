import "../src/App.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Overview from "./Pages/Overview";
import DetailWeather from "./Pages/DetailWeather";
import Bookmark from "./Pages/Bookmark";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import React, { useState, useEffect } from "react";

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
        <Route path="/details" element={<DetailWeather />} />
        <Route
          path="/search"
          element={
            <Search
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              locationArray={locationArray}
              setLocationArray={setLocationArray}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
