import "../src/App.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Overview from "./Pages/Overview";
import DetailWeather from "./Pages/DetailWeather";
import Bookmark from "./Pages/Bookmark";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/details" element={<DetailWeather />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
